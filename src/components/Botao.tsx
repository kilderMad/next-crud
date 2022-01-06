interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    children: any
}

export default function Botao({ children, cor='gray'}:BotaoProps){
    //const core = props.cor ?? 'green'
    console.log(cor)
    return (
            <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2  rounded-lg  mb-4
            `}>
                {children}
            </button>  
    )
}