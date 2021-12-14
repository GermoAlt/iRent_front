import React, {useEffect, useState} from "react";
import "./searchPanel.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";
import {addLocale} from "primereact/api";
import {AutoComplete} from "primereact/autocomplete";
import {Dropdown} from "primereact/dropdown";
const data = require('../../packages/PackageData.json')

export default function SearchPanel(props) {

    // const [ubicaciones, setUbicaciones] = useState([])
    // const [deportes, setDeportes] = useState([])
    //
    // useEffect(()=>{
    //     var ubi = []
    //     var dep = []
    //     for (const d in data) {
    //         if(!ubi.includes(d.ubicacion)) ubi.push(d.ubicacion)
    //         if(!dep.includes(d.deporte)) dep.push(d.deporte)
    //     }
    //     setUbicaciones(ubi)
    //     setDeportes(dep)
    // }, [])

    const ciudades = [
        { name: "Palermo"},
        { name: "Belgrano"},
        { name: "GBA Sur"},
        { name: "Colegiales"},
        { name: "Montserrat"}
    ];

    const deportes = [
        { name: "Golf"},
        { name: "Tenis"},
        { name: "Arquería"},
        { name: "Padel"},
        { name: "Ciclismo"}
    ];


    const [ deporte, setDeporte ] = useState("")
    const [ ubicacion, setUbicacion ] = useState("")
    const [ desde, setDesde ] = useState("")

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Claro'
    });

    return (
        <div className={"home-page-panel-busqueda"}>
            <div className={"panel-busqueda-container"}>
                <div>
                    <div className={"panel-busqueda-titulo"}><span>Encontrá tu experiencia</span> ideal</div>
                </div>
                <div className={"panel-busqueda-input"}>
                    <span className="label-placeholder-container">
                        <Dropdown id={"deporte"} className={"a"} optionLabel={"name"} placeholder={"Selecciona un deporte"} options={deportes} value={deporte} onChange={(e) => setDeporte(e.target.value)}/>
                    </span>
                    <span className=" label-placeholder-container">
                        <Dropdown id={"ubicacion"} className={"a"} optionLabel={"name"} placeholder={"Selecciona una ubicacion"} options={ciudades} value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}/>
                    </span>
                    <span className=" label-placeholder-container" >
                        <Calendar id={"fecha"} showIcon placeholder={"Ingresá una fecha"} className={"p-d-block p-mb-2"} value={desde}
                                  onChange={(e) => setDesde(e.target.value)} locale="es" dateFormat="dd/mm/yy"/>
                    </span>
                </div>
                <div className={"panel-busqueda-boton-container"}>
                    <Button label={"Buscar"} icon={"pi pi-search"}  className="p-button-raised"/>
                </div>
            </div>
        </div>
    )
}