import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {

  const pedidos = [
    {
      data: "20/05/2025",
      categoriaIcone: "solid",
      icone: "hard-drive",
      titulo: "SSD",
      descricao: 'SSD de 1TB'
    },
    {
      data: "22/07/2025",
      categoriaIcone: "solid",
      icone: "book",
      titulo: "Livro",
      descricao: 'Concrete Maths'
    },
    {
      data: "21/09/2025",
      categoriaIcone: "solid",
      icone: "laptop",
      titulo: "Notebook",
      descricao: 'Notebook i7 - 1Tb'
    },
    {
      data: "10/04/2025",
      categoriaIcone: "solid",
      icone: "anchor",
      titulo: "Âncora",
      descricao: 'Uma âncora'
    },
  ]

  const textoOK = 'Já chegou!'
  const textoNOK = 'Ainda não chegou!'
  const funcaoOK= () => alert('Obrigado pelo feedback!')
  const funcaoNOK= () => alert("Verificamos o ocorrido!")

  const componenteFeedback = (    
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )

  return(
    <div className="container border rounded mt-2">

      <div className="row">
        <div className="col-12">
          <h1 className="display text-center">Seus Pedidos</h1>
        </div>
      </div>

      <div className="row">
        {
          pedidos.map((p, index) => (
            <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
              <Cartao cabecalho={p.data}>
                <Pedido 
                  categoriaIcone={p.categoriaIcone}
                  icone={p.icone}
                  titulo={p.titulo} 
                  descricao={p.descricao}/>
                {componenteFeedback}
              </Cartao>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default App