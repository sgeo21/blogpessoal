export default interface UsuarioLogin{
    // tema: string | number | readonly string[] | undefined; da onde surgiu isso???? 
    id: number;
    nome: string;
    usuario: string; 
    senha: string;
    foto: string;
    token: string;
}