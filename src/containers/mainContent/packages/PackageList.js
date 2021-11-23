import React, {useEffect, useState} from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "./packageList.css"
import SearchPanel from "../homePage/searchPanel/SearchPanel";
import {Image, Transformation} from "cloudinary-react";
import {Link} from "react-router-dom";

var data = require('./PackageData.json')

export default function PackageList(props){

    const [ listaProductos, setListaProductos] = useState()
    var packageData = data.filter(e => e.deporte === props.match.params.deporte)

    const image_size= 500;

    useEffect(() => {
        setListaProductos(packageData)
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
            <SearchPanel/>
            <div className={"experience-package-list"}>
                <div className={"package-list-filter-panel"}>
                    <span>Filtros</span>
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
                    <div className={"card"}>
                        <DataScroller value={listaProductos} itemTemplate={itemTemplate}
                                      rows={5} inline scrollHeight="500px"
                                      header="Paquetes" />
                    </div>
                </div>
            </div>
        </div>
    )
}