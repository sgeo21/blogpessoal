import type Tema from "./Temas";
import type Usuario from "./Usuario";

 export default interface Postagem{
    id:number;
    titulo: string;
    texto: string;
    data: string; //fica assim pois ela é gerada pelo db.
    tema: Tema | null; //importado
    usuario: Usuario | null; //importado
 }