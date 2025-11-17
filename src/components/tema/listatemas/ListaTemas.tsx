import { useNavigate } from "react-router-dom";
import CardTema from "../cardtema/CardTema"
import { useContext, useEffect, useState } from "react";
import type Tema from "../../../models/Temas";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function ListaTemas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [temas, setTemas] = useState<Tema[]>([]);
    
    //Se o usuario não estiver logado ele pede o login
    const{usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    //solicitando a verificação de login
    useEffect(() => {
        if(token === ''){
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    // Verifica os temas
    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    async function buscarTemas() {
        try{

            setIsLoading(true)

            await buscar('/temas', setTemas, {
                headers: {Authorization: token}
            })


        }catch(error: any){
            if(error.toString().includes('401')){
                handleLogout();
            }
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <>
        {
            // o && executa se o que estiver acontecendo for verdadeiro
            isLoading && (
                // rodando animação de is loading selecionada quando a função de carregar temas for chamada
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )
        }
        {/*  Container externo para centralizar o conteúdo na tela 
                - flex justify-center → alinha o conteúdo no centro horizontalmente
                - w-full → ocupa 100% da largura
                - my-4 → margem vertical */}
            <div className="flex justify-center w-full my-4">
                 {/* container → classe do Tailwind que adiciona largura máxima e padding
                    flex flex-col → organiza o conteúdo em coluna */}
                <div className="container flex flex-col">

                    {/* Regra para exibir mensagem quando não tiver dados de tema */}
                    {
                        (!isLoading && temas.length === 0) &&(
                            <span className="text-3xl text-center my-8">
                                Nenhum Tema foi encontrado!
                            </span>
                        )
                    }
                     {/* Grid responsivo para organizar os cards:
                        - grid-cols-1 → 1 coluna no mobile
                        - md:grid-cols-2 → 2 colunas em telas médias
                        - lg:grid-cols-3 → 3 colunas em telas grandes
                        - gap-8 → espaçamento entre os cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {/* Aqui é exibido um CardTema, que é um map() para listar vários temas */}
                            {
                                temas.map((tema) => (
                                <CardTema key={tema.id} tema={tema}/>
                                ) )
                            }
                            {/* Se não gerar o id ele pode dar problema por causa de ficar 
                            confuso e desorganizado */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas;