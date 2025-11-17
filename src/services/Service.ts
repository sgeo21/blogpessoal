import axios from "axios";
// aqui configura o axios depois da instalação do mesmo
const api = axios.create({
    baseURL: "https://blogpessoal-spring-iqts.onrender.com"
})
// aqui explica como será feito o cadastro do usuário
// no setDados pega os dados gerados pelo banco de dados (id, token, etc)
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
//para buscar com token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
//para cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}
//para atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}
//para deletar com token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}