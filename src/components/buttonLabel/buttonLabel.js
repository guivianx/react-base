import React from "react"
import '../buttonStyle/button.css'

const click = (x) => {
    alert(`a label deste botão é ${x}`)
}

const ButtonLabel = (props) => <button onClick={()=>click(props.label)} className="btn">{props.label}</button>


export default ButtonLabel