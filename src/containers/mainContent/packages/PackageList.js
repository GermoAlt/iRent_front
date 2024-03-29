import React, {useEffect, useState} from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "./packageList.css"
import {Image, Transformation} from "cloudinary-react";
import {Link, useParams} from "react-router-dom";
import ScrollToTop from "../../../components/scrollToTop/ScrollToTop";
import {Tooltip} from "primereact/tooltip";

var data = require('./PackageData.json')

export default function PackageList(){

    const [ listaProductos, setListaProductos] = useState()
    const params = useParams();
    const packageData = data.filter(e => e.deporte === params.deporte);

    const image_size= 500;

    useEffect(() => {
        setListaProductos(packageData)
    }, [])

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

    return (
        <div>
            <ScrollToTop/>
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
