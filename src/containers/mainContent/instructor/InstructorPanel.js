import React, {useEffect, useState} from "react";
import data from "./paquetesComprados.json";
import {Rating} from "primereact/rating";
import {Button} from "primereact/button";
import {Accordion, AccordionTab} from "primereact/accordion";
import {DataScroller} from "primereact/datascroller";
import "./instructorPanel.css"
import {Image, Transformation} from "cloudinary-react";
import {Checkbox} from "primereact/checkbox";
import {Tooltip} from "primereact/tooltip";
import {Link} from "react-router-dom";

export default function InstructorPanel(props){
    const [ listaProductos, setListaProductos] = useState()
    // var packageData = data.filter(e => e.deporte === props.match.params.deporte)
    const image_size = 500

    useEffect(() => {
        setListaProductos(data)
    }, [])
    const itemTemplate1 = (data) => {
        return (
            <div className="product-item">
                <div className={"product-image"}>
                    <Image publicId={"Seminario/" + data.image}>
                        <Transformation width="150" height="150" radius="max" crop="fill" />
                    </Image>
                </div>
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <div className="product-price">${data.price}</div>
                </div>
                <div className="item-iconos-info">
                    <div className={"iconos-container"}>
                        <Tooltip target={".tooltip-target"} tooltipOptions={{position: 'left'}}/>
                        <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={`${data.cantidad} persona${data.cantidad > 1 ? "s" : ""}`}>
                            <Image publicId={`Seminario/personas_${data.cantidad}`} className={"card-icon"}>
                                <Transformation width={image_size} height={image_size} crop={"scale"}/>
                            </Image>
                        </span>
                        {data.incluyeArticulo ?
                            <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={"Incluye artículos"} >
                                <Image publicId={"Seminario/icono_articulo"} className={"card-icon"}>
                                    <Transformation width={image_size} height={image_size} crop={"scale"}/>
                                </Image>
                            </span>
                            : null}
                        {data.incluyeCancha ?
                            <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={"Incluye ubicación"} >
                                <Image publicId={"Seminario/cancha"} className={"card-icon"}>
                                    <Transformation width={image_size} height={image_size} crop={"scale"}/>
                                </Image>
                            </span>
                            : null}
                    </div>
                    <div className={"button-container"}>
                        <Link to={"/detallePaquete/"+data.id}>
                            <Button label={"Ver detalle"}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <div className={"product-image"}>
                    <Image publicId={"Seminario/" + data.image}>
                        <Transformation width="150" height="150" radius="max" crop="fill" />
                    </Image>
                </div>
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.fecha} - {data.cantidad} persona{data.cantidad !== 1 ? "s" : ""}</div>
                    <div className="product-description">{data.description}</div>
                    <span className="product-price">${data.price}</span>
                </div>
                <div className="item-iconos-info">
                    <div className={"iconos-container"}>
                        <Tooltip target={".tooltip-target"} tooltipOptions={{position: 'left'}}/>
                        <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={`${data.cantidad} persona${data.cantidad > 1 ? "s" : ""}`}>
                            <Image publicId={`Seminario/personas_${data.cantidad}`} className={"card-icon"}>
                                <Transformation width={image_size} height={image_size} crop={"scale"}/>
                            </Image>
                        </span>
                        {data.incluyeArticulo ?
                            <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={"Incluye artículos"} >
                                <Image publicId={"Seminario/icono_articulo"} className={"card-icon"}>
                                    <Transformation width={image_size} height={image_size} crop={"scale"}/>
                                </Image>
                            </span>
                            : null}
                        {data.incluyeCancha ?
                            <span className={"tooltip-target"} data-pr-position="top" data-pr-tooltip={"Incluye ubicación"} >
                                <Image publicId={"Seminario/cancha"} className={"card-icon"}>
                                    <Transformation width={image_size} height={image_size} crop={"scale"}/>
                                </Image>
                            </span>
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
                <div className={"package-list-filter-panel"}>
                    <Accordion multiple>
                        <AccordionTab header={"Relevancia"}>

                        </AccordionTab>
                        <AccordionTab header={"Deporte"}>

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
                    <div className={"card"} >
                        <DataScroller value={listaProductos} itemTemplate={itemTemplate}
                                      rows={5} inline scrollHeight="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}