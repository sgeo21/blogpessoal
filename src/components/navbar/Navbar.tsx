// configurações do cabeçalho 

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

// para deixar fixo na aba superior: fixed top-0 left-0
function Navbar() {

  // para sair do sistema
  const navigate= useNavigate();
  const { handleLogout } = useContext(AuthContext); 
  // desenvolver fução
  function logout(){
    handleLogout(); //faz o logout
    alert('O ususário foi desconectado com sucesso!'); // mensagem de sucesso
    navigate('/') //redirecionar pagina inicial (login)
  }

  return (
    <div
     className="bg-indigo-900 w-full flex justify-center py-4 text-white ">
        <div className="container flex justify-between text-lg mx-8 ">
            <Link to="/home" className="text-2xl front-bold">Blog Pessoal</Link> 

            <div className='flex gap-4'> 
                Postagens
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                Perfil
                <Link to='' onClick={logout} className="hover:underline">Sair</Link> 
            </div>
        </div>        
    </div>
  )
}

export default Navbar