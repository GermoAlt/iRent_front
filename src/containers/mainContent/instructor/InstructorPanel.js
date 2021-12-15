import React, {useEffect, useState} from "react";
import data from "./paquetesComprados.json";
import {Rating} from "primereact/rating";
import {Button} from "primereact/button";
import {Accordion, AccordionTab} from "primereact/accordion";
import {DataScroller} from "primereact/datascroller";
import "./instructorPanel.css"
import {Image, Transformation} from "cloudinary-react";
import {Checkbox} from "primereact/checkbox";

export default function InstructorPanel(props){
    let paquetes = JSON.parse(localStorage.getItem("paquetes"));
    const [ listaProductos, setListaProductos] = useState()
    // var packageData = data.filter(e => e.deporte === props.match.params.deporte)
    const image_size = 500

    useEffect(() => {
        setListaProductos(data)
    }, [])

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <Image publicId={"Seminario/" + data.image}>
                    <Transformation width="150" height="150" radius="max" crop="fill" />
                </Image>
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.fecha} - {data.cantidad} persona{data.cantidad !== 1 ? "s" : ""}</div>
                    <div className="product-description">{data.description}</div>
                    <span className="product-price">${data.price}</span>
                </div>
                <div className="item-iconos-info">
                    <div className={"iconos-container"}>
                        {data.incluyeArticulo ?
                            <Image publicId={"Seminario/icono_articulo"} className={"card-icon"}>
                                <Transformation width={image_size} height={image_size} crop={"scale"}/>
                            </Image>
                        : null}
                        {data.incluyeCancha ?
                            <Image publicId={"Seminario/cancha"} className={"card-icon"}>
                                <Transformation width={image_size} height={image_size} crop={"scale"}/>
                            </Image>
                        : null}
                    </div>
                    <div className={"item-botones"}>
                        <Button icon="pi pi-shopping-cart" className={"p-button-success"}label="Aceptar" />
                        <Button icon="pi pi-shopping-cart" className={"p-button-danger"} label="Ignorar" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={"instructor-panel-container"}>
            <div className={"experience-package-list"}>
                <div className={"instructor-filter-panel"}>
                    <Accordion multiple>
                        <AccordionTab header={"Deporte"}>
                            <div className={"panel-filtro"}>
                                <div>
                                    <Checkbox inputId={"Tenis"}/>
                                    <label htmlFor="Tenis">Tenis</label>
                                </div>
                                <div>
                                    <Checkbox inputId={"Golf"}/>
                                    <label htmlFor="Golf">Golf</label>
                                </div>
                                <div>
                                    <Checkbox inputId={"Arqueria"}/>
                                    <label htmlFor="Arqueria">Arquería</label>
                                </div>
                            </div>
                            <div className={"panel-filtro"}>
                                <div>
                                    <Checkbox inputId={"Ciclismo"}/>
                                    <label htmlFor="Ciclismo">Ciclismo</label>
                                </div>
                                <div>
                                    <Checkbox inputId={"Padel"}/>
                                    <label htmlFor="Padel">Padel</label>
                                </div>
                                <div>
                                    <Checkbox inputId={"Escalada"}/>
                                    <label htmlFor="Escalada">Escalada</label>
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header={"Ubicación"}>

                        </AccordionTab>
                        <AccordionTab header={"Fecha"}>

                        </AccordionTab>
                        <AccordionTab header={"Participantes"}>

                        </AccordionTab>
                        <AccordionTab header={"Categoría"}>

                        </AccordionTab>
                    </Accordion>
                </div>
                <div className={"package-list-results datascroller-demo"}>
                    <div className={"card"}>
                        <DataScroller value={paquetes} itemTemplate={itemTemplate}
                                      rows={5} inline scrollHeight="579px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}