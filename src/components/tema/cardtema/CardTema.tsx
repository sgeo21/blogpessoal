// Importa o componente Link do react-router-dom.
// Link é usado para navegar entre rotas sem recarregar a página.
import { Link } from 'react-router-dom'
import type Tema from '../../../models/Temas'


interface CardTemaProps{
    tema: Tema
}
// Componente funcional chamado CardTema
// Aqui está sem tipagem explícita, mas mesmo assim é válido em TypeScript.
function CardTema({ tema }: CardTemaProps) {
    // Todo componente React deve retornar JSX
    return (
         // Container principal do card
        // Tailwind: borda, layout em coluna, cantos arredondados e escondendo overflow
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            {/* Cabeçalho do card */}
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Tema {/* Texto fixo — futuramente pode receber props */}
            </header>
            {/* Área onde vai a descrição do tema */}
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

             {/* Container dos botões de ação: editar e deletar */}
             {/* 
                    - to='' → ainda sem rota definida
                    - w-full → ocupa metade do espaço (pois existem 2 links)
                    - hover:bg-indigo-800 → muda cor quando o mouse passa por cima
                */}
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}

                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                {/* Link para rota de exclusão */}
                {/* hover:bg-red-700 → cor mais escura ao passar o mouse */}
                <Link to={`/deletartema/${tema.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}
// Exporta o componente para ser utilizado em outras partes da aplicação
export default CardTema