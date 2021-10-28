import React, {useState} from "react";
import "./searchPanel.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";

export default function SearchPanel() {

    const [ deporte, setDeporte ] = useState("")
    const [ ubicacion, setUbicacion ] = useState("")
    const [ desde, setDesde ] = useState("")
    const [ hasta, setHasta ] = useState("")

    return (
        <div className={"home-page-panel-busqueda"}>
            <div className={"panel-busqueda-container"}>
                <div>
                    <h2 className={"panel-busqueda-titulo"}>Buscá tu paquete ideal</h2>
                </div>
                <div className={"panel-busqueda-input"}>
                    <span className="p-float-label label-placeholder-container">
                        <InputText id={"deporte"} className={"p-d-block p-mb-2"} value={deporte} onChange={(e) => setDeporte(e.target.value)}/>
                        <label htmlFor="deporte">Deporte</label>
                    </span>
                    <span className="p-float-label label-placeholder-container">
                        <InputText id={"ubicacion"} className={"p-d-block p-mb-2"} value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}/>
                        <label htmlFor="ubicacion">Ubicación</label>
                    </span>
                    <span className="p-float-label label-placeholder-container p-input-icon-left">
                        <Calendar id={"fechaDesde"} className={"p-d-block p-mb-2"} selectionMode={"range"} value={desde} onChange={(e) => setDesde(e.target.value)}/>
                        <label htmlFor="fechaDesde">Fecha</label>
                    </span>
                </div>
                <div className={"panel-busqueda-boton-container"}>
                    <Button label={"Buscar"} icon={"pi pi-search"}  className="p-button-raised p-button-rounded"/>
                </div>
            </div>
        </div>
    )
}