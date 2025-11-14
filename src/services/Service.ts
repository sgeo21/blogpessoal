import axios from "axios";
// aqui configura o axios depois da instalação do mesmo
const api = axios.create({
    baseURL: "https://blogpessoal-spring-iqts.onrender.com"
})
// aqui explica como será feito o cadastro do usuário
// no setDados pega os dados gerados pelo banco de dados (id, token, etc)
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados);
    setDados(resposta.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados);
    setDados(resposta.data);
}