import React, {useEffect, useState} from "react";
import "./banner.css"
import {useLocation} from "react-router-dom";

export default function Banner(){

    const location = useLocation()


    const  [titulo, setTitulo] = useState("")
    const  [descripcion, setDescripcion] = useState("")
    const  [fondo, setFondo] = useState("")
    const  [classname, setClassname] = useState("")

    useEffect(() => {
        if (location.pathname.endsWith("tenis")){
            setTitulo("Tenis")
            setDescripcion("Descubrí una nueva pasión con nuestros paquetes")
            setFondo("https://images.squarespace-cdn.com/content/v1/5568a665e4b01bef57911013/1438809545918-NBBI9DN1LTG09T6IWHDU/racket-and-ball.jpg?format=1500w")
            setClassname("")
        } else {
            setTitulo("Búsquedas abiertas")
            setDescripcion("Tu próximo cliente a un solo click")
            setFondo("https://images.pexels.com/photos/3763876/pexels-photo-3763876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
            setClassname("foto-banner-panel-instructor")
        }
    })



    return(
        <div className={`banner-container ${classname}`} style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${fondo})` }}>
            <div className={"banner-titulo"}>{titulo}</div>
            <div className={"banner-descripcion"}>{descripcion}</div>
        </div>
    )
}