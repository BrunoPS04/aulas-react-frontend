import React from 'react'
import './index.css'

function Onibus(props) {
  return (
    <div className='onibus-container'>
      <h2>Modelo: {props.onibus.modelo} {props.emoji}</h2>
      <p>Placa: {props.onibus.placa}</p>
      <p>Ano: {props.onibus.ano}</p>
      <p>Id: {props.onibus.id}</p>
    </div>
  )
}

export default Onibus
