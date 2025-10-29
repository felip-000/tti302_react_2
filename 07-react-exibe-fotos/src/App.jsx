import React from "react"
import Busca from "./Busca"

class App extends React.Component {

  onBuscaRealizada = (termoDeBusca) => {
    const chaveAPI = 'T7bwNCRAKRad5zIYpu0Q7RsVvPdwFVMNpteLwLHz52GxWF9pd763jrVT'
    console.log(termoDeBusca)
  }
  render(){
    return (
      <div className="grid border-1 border-400 border-round-sm p-3 mx-3 mt-3">
        <div className="col-12">
          <i className="pi pi-truck"></i>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }  
}

export default App