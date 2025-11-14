import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

function Login() {

    const navigate= useNavigate(); //depois de navegar ele vai redirecionar para a home
    
    //
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    // usa apenas o que precisa para a aplicação ao inves de pegar todas as vezes tud.
    const {usuario, handleLogin, isLoading} = useContext(AuthContext);

    //verifica a autenticação do usuario
    useEffect( () => {
        if (usuario.token !== ""){
            navigate('/home')
        }
    }, [usuario])

    //reconhecer a função de fazer o login
    function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
        setUsuarioLogin({
          ...usuarioLogin, // pega 'o resto' das coisas
          [e.target.name]: e.target.value  // isso diz que atualza no valor 
        })
      }

      //criar a função de logar
      function login(e: FormEvent<HTMLFormElement>){
        e.preventDefault(); // prevenir erros

        //chamar o login
        handleLogin(usuarioLogin);
      }

      //teste se a função esta ok
      // depois disso criamos o value e onChange em cada uma das ações (usuario e senha)
      console.log(JSON.stringify(usuarioLogin)); //precisa ser apagado na aplicação real do site.


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" 
                    onSubmit={login} // aqui é onde "chama o login"
                >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-white w-1/2 py-2">
                      {/* aqui é a animação do login quando clica no botão login */}
                      {
                        isLoading ?
                        <ClipLoader
                            color="#fffff"
                            size={24}
                        />
                        :
                        <span>Entrar</span>
                      } 
                    </button>

                    <hr className="border-slate-800 w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                 <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                            w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );
}

export default Login;