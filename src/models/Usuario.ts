import type Postagem from "./Postagens";

export default interface Usuario{
    id: number;
    nome: string;
    usuario: string; 
    senha: string;
    foto: string;
    postagem?: Postagem[] | null; //postagem vai ser associado ainda desta forma ele trás a lista de postagem do usuario.
}