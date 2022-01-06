import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  
  const clientes = [
    new Cliente('Leo', 34, 'costa@gmail.com', '1'),
    new Cliente('Kilder', 21,'costa@gmail.com', '2'),
    new Cliente('Leticia', 19,'costa@gmail.com', '3')
  ]

  function clienteSelecionado(cliente : Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente : Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className="h-screen bg-gradient-to-r from-violet-600 to-indigo-900 p-5 w-5/5 flex justify-center items-center">
      
      <Layout titulo="Cadastro simples">
        <div className="flex justify-end">
          <Botao>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>{/* o TabelaProps, pede se possivel o clienteSelecionado e o ...Excluido,
       e nas chaves passamos a funcao com a acao que sera acionada pelo onclick la no botao*/}
      
    </div>
    
      
  )
}
