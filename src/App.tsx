import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/tema/listatemas/ListaTemas"
import FormTema from "./components/tema/formtema/FormTema"
import DeletarTema from "./components/tema/deletartema/DeletarTema"


function App() {
  

  return (
    // O fragment<> </> pode ser utilizado pois para o return precisa aglomerar.
    <>
    {/* precisa fazer a importação da pagina */}
    <AuthProvider> {/* tudo que esta aqui dentro é de acesso de quem está*/}
    <BrowserRouter> {/* importado após adição de npm install react-router-dom*/}
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrartema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />
        </Routes>
      </div>  
      <Footer />
    </BrowserRouter> 
    </AuthProvider>
    </>
  )
}

export default App
