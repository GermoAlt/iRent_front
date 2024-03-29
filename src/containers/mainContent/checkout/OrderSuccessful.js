import React from "react";
import {Button} from "primereact/button";
import "./orderSuccessful.css"
import {useNavigate} from "react-router-dom";

export default function OrderSuccessful(){
    const navigate = useNavigate()
    return (
        <div className={"order-successful-aux"}>
            <div className={"order-successful-container card"}>
                <div className={"order-successful-title"}>
                    ¡Paquete comprado con éxito!
                </div>
                <div className={"order-successful-text"}>
                    En las próximas 24 horas te será asignado un instructor.<br/>Cuando esto suceda, te llegará un mail con toda la información que necesitás.
                </div>
                <div className={"order-successful-button"}>
                    <Button label={"Volver al inicio"} onClick={() => {navigate("/")}}/>
                </div>
            </div>
        </div>
    )
}
