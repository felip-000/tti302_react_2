import React from 'react'

const Pedido = (props) => {
  return (
    
        <div className=" d-flex">
          <div className="d-flex align-items-center">
            <i className={`fa-${props.categoriaIcone} fa-${props.icone} fa-2x`}></i>
          </div>
          <div className="flex-grow-1 border rounded">
            <div className="pt-3">
              <h4 className="text-center">{props.titulo}</h4>
              <p className="text-center">{props.descricao}</p>
            </div>
          </div>
        </div>

  )
}

export default Pedido