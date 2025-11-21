import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    // Aqui é onde entra a lógica em typscript
    
  return (
    <>
    // Container
    <div
        // style={{
        //     backgroundColor:"#312e81",
        //     display: "flex",
        //     justifyContent: "center"
        // }}
        className="bg-indigo-900 flex justify-center"
    >      
    {/* Grid que divide a rela em duas colunas  */}
        <div
            // style={{
            //     display:"grid",
            //     gridTemplateColumns: "1fr 1fr",
            //     color: "white",
            //     width: "100%",
            //     maxWidth: "1280px"
            // }}
            className="container grid grid-cols-2 text-white"
          > 
           {/* Coluna esquerda */}
            <div
                // style={{
                //     display: "flex",
                //     flexDirection: "column",
                //     gap: "1rem", 
                //     alignItems: "center",
                //     justifyContent: "center",
                //     paddingTop: "1rem",
                //     paddingBottom: "1rem"
                // }}
                className="flex flex-col gap-4 items-center justify-center py-4"
             >
                <h2
                    // style={{
                    //     fontSize: "3rem",
                    //     fontWeight: "bold"
                    // }}
                    className="text-5xl font-bold"
                 > Seja bem vinde!</h2>
                <p
                // style={{
                //         fontSize: "1.25rem"
                //     }}
                    className="text-xl"
                > Expresse aqui seus pensamentos e opiniões</p>
                {/* Link/ botão */}
                <div
                    // style={{
                    //     display:"flex",
                    //     justifyContent: "space-around",
                    //     gap: "1rem"
                    // }}
                    className="flex justify-around gap-4"
                 > 
                    <div
                        // style={{
                        //     borderRadius: "0.5rem",
                        //     color: "white",
                        //     border: "2px solid white", 
                        //     padding: "0.5rem 1rem"
                        // }}
                        className="rounded text-white py-2 px-4"
                     > <ModalPostagem /> 
                    </div>
                </div>
            </div>

            {/* Coluna direira */}
            <div
                // style={{
                //     display: "flex",
                //     justifyContent: "center"
                // }}
                className="flex justify-center"
             >
                <img
                    src="https://i.imgur.com/fyfri1v.png"
                    alt="Imagem da Página Home"
                    // style={{
                    //     width:"66%"
                    // }}
                    className="w-2/3"
                />
            </div>
        </div>
    </div>
     <ListaPostagens />
    </>
  )
}

export default Home