import React from "react"
import '../buttonStyle/button.css'

const Button = (props) => <button className="btn" onClick={props.event}>Clique aqui para alterar o estado do texto acima</button>


export default Button

