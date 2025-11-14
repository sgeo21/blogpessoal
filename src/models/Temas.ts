import type Postagem from "./Postagens";

export default interface Tema{
    id: number;
    descricao: string;
    postagem?: Postagem[] | null; //importado

}