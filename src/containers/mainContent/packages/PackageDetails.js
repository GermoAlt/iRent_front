import React from "react";
import {useParams} from "react-router-dom";
import "./packageDetails.css"
import {Image, Transformation} from "cloudinary-react";
import {Button} from "primereact/button";
import {Rating} from "primereact/rating";
import ScrollToTop from "../../../components/scrollToTop/ScrollToTop";

var data = require('./PackageData.json')

export default function PackageDetails(){
    const id = useParams().id
    const packageData = data.filter(x => x.id === id)[0]
    const image_size = 75
    return (
        <div className={"card package-data-container"}>
            <ScrollToTop/>
            <div className={"package-data-panel-superior"}>
                <div className={"package-data-panel-superior-izq"}>
                    <Image publicId={"Seminario/" + packageData.image}/>
                </div>
                <div className={"package-data-panel-superior-der"}>
                    <div className={"card package-info-card"}>
                        <div className={"info-card-title"}>
                            {packageData.name}
                        </div>
                        <div>
                            Para {packageData.cantidad} persona{packageData.cantidad !== 1 ? "s" : ""}
                        </div>
                        <div>
                            {packageData.ubicacion}
                        </div>
                        <div>
                            {packageData.price}
                        </div>
                    </div>
                    <div className={"bbbbb"}>
                        <div className={"package-info-includes"}>
                            <div className={"aaaaa"}>
                                Incluye:
                            </div>
                            <div className={"package-info-panel-includes-images"}>
                                <Image publicId={"Seminario/icono_articulo"}>
                                    <Transformation height={image_size} width={image_size} crop={"scale"}/>
                                </Image>
                                <Image publicId={"Seminario/icono_instructor"}>
                                    <Transformation height={image_size} width={image_size} crop={"scale"}/>
                                </Image>
                                <Image publicId={"Seminario/cancha"}>
                                    <Transformation height={image_size} width={image_size} crop={"scale"}/>
                                </Image>
                            </div>
                        </div>
                        <div>
                            <Button label={"Confirmar"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"line-separator"}/>
            <div className={"package-data-panel-inferior"}>
                <div className={"package-data-panel-inferior-title"}>
                    Esta experiencia incluye...
                </div>
                <div className={"package-data-panel-inferior-content-container"}>
                    <div className={"card"}>
                        <div className={"card-detail-title"}>Artículos</div>
                        <div className={"line-separator-small"}/>
                        <Image publicId={"Seminario/articulo-tenis"}>
                            <Transformation height={100} width={150} angle="-90"crop={"fill"}/>
                        </Image>
                        <Rating value={4} cancel={false}/>
                        <div>Raqueta Wilson Agile</div>
                        <div className={"line-separator-small"}/>
                        <div className={"edicion-articulo-preseleccionado"}>
                            <Button label={"Editar"}/>
                            <Button label={"Eliminar"}/>
                        </div>
                    </div>
                    <div className={"card"}>
                        <div className={"card-detail-title"}>Instructor</div>
                        <div className={"line-separator-small"}/>
                        <Image publicId={"Seminario/instructor_default"} className={"aaaaa"}>
                            <Transformation height={110} width={200} crop={"fill"}/>
                        </Image>
                        <div className={"line-separator-small"}/>
                        <div>En 24 horas te asignaremos un instructor. <br/>Te avisaremos cuando este asignado.</div>
                    </div>
                    <div className={"card"}>
                        <div className={"card-detail-title"}>Cancha</div>
                        <div className={"line-separator-small"}/>
                        <Image publicId={"Seminario/cancha_tenis"} className={"aaaaa"}>
                            <Transformation height={100} width={150} crop={"fill"}/>
                        </Image>
                        <div>Lawn Tenis Club</div>
                        <div className={"line-separator-small"}/>
                        <div>Olleros 1510, Palermo, CABA.</div>
                        <div>www.baltc.net</div>
                    </div>
                </div>

            </div>

        </div>
    )
}