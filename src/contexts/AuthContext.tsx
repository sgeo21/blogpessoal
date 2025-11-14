import { createContext, useState, type ReactNode } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

//aqui cria o lagout, 
interface AuthContextProps{
    usuario:UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

// outra interface - qualquer componete react pode utilizar este atravez do ReactNode
interface AuthProviderProps{
    children: ReactNode
}

//receber as propriedade da interface, que vai ter login, logout
export const AuthContext = createContext({} as AuthContextProps)

//cria o provedor e recebe todos os componentes react, ou seja todos os arquix Tsx do meu projeto
export function AuthProvider ({ children }: AuthProviderProps){

    const [usuario, setUsuario ] = useState<UsuarioLogin>({
        id:0,
        nome:"",
        usuario: "",
        senha: "",
        foto:"",
        token: ""
    });

    //inicializar o estado isLoading (exibir e ocultar o loading)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //Implementação da função de logon (autenticação de backend)
    async function handleLogin(usuarioLogin: UsuarioLogin){
        setIsLoading(true);

        try{
            await login('/usuarios/logar', usuarioLogin, setUsuario);
            alert("Usuário autenticado com sucesso!")
        }catch(error){
            alert("Os dados do usuário estão inconsistentes!")
        }
        setIsLoading(false);
        
    }

    // função para desconectar o usuário e limpar os dados
    function handleLogout() {
        setUsuario({
              id:0,
              nome:"",
              usuario: "",
              senha: "",
              foto:"",
              token: ""
    });
    }
// retorna dentro do contexto os 4 elementos selecionados, tudo o que estiver envolvido por esse provedor 
    return(
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {/* o Children representa todo os componentes. */}
            {children} 
        </AuthContext.Provider>
    )
}
//após isso preciso disponibilizar la no app.tsx