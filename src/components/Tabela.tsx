import Cliente from "../core/Cliente";
import { IcconeLixo, IconeEdicao } from "./icons";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabec(){

        return(
            <tr className=" w-full ">
                <th className=" text-left p-4" >Codigo</th>
                <th className=" text-left p-4" >Nome</th>
                <th className=" text-left p-4" >Idade</th>
                <th className=" text-left p-4" >Email</th>
                {exibirAcoes ? <th className=" p-4" >Açoes</th> : false}
            </tr>
            )
    }

    function renderizarDados(){
       return props.clientes?.map((cliente, i) =>{
           return (
               <tr key={cliente.id}
               className={`
               ${i % 2 === 0 ? 'bg-purple-200': 'bg-purple-100' }`}>
                   <td className=" text-left p-4">{cliente.id}</td>
                   <td className=" text-left p-4">{cliente.nome}</td>
                   <td className=" text-left p-4">{cliente.idade}</td>
                   <td className=" text-left p-4">{cliente.email}</td>
                   {exibirAcoes ? renderizarAcoes(cliente) : false}
               </tr>
           )
       }) 
    }

    function renderizarAcoes(cliente: Cliente){               
        return (
            <td className=" flex justify-center">
                
                {props.clienteSelecionado ? ( //isso para passar como propiedade na tabela, se existir la essa propiedade, o botao aparece
                    <button onClick={()=> props.clienteSelecionado?.(cliente)} className={` flex justify-center items-center text-green-600 
                    rounded-full p-2 m-1 mt-2 hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>
                    ) : false}
                {props.clienteExcluido ? (
                    <button onClick={()=> props.clienteExcluido?.(cliente)} className={` flex justify-center items-center text-red-500 
                    rounded-full p-2 my-1 mt-2 hover:bg-purple-50`}>
                        {IcconeLixo}
                    </button>
                ) : false}
                
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
             text-gray-100
             bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabec()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
            
        </table>
    )
}