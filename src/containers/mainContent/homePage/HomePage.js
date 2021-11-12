import './homePage.css';
import React from "react";
import ExperiencePanel from "./experiencePanel/ExperiencePanel";
import SearchPanel from "./searchPanel/SearchPanel";
import {Button} from "primereact/button";
import {Image, Transformation} from "cloudinary-react";
import Footer from "../../footer/footer";

export default function HomePage() {

    const image_size = 100;

    return (
        <div className={"home-page"}>
            <SearchPanel/>
            <div className={"home-page-button-panel"}>
                <div className={"button-panel-element"}>
                    <div className={"button-panel-element-image"}>
                        <Image publicId={"Seminario/icono_experiencia"}>
                            <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        </Image>
                    </div>
                    <div className={"button-panel-element-text"}>
                        <strong>Viví nuevas experiencias</strong> <br/>
                        Seleccioná el deporte que quieras probar y nos encargamos del resto
                    </div>
                    <div className={"button-panel-element-button"}>
                        <Button label={"VER EXPERIENCIAS"}/>
                    </div>
                </div>
                <div className={"button-panel-element"}>
                    <div className={"button-panel-element-image"}>
                        <Image publicId={"Seminario/icono_articulo"}>
                            <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        </Image>
                    </div>
                    <div className={"button-panel-element-text"}>
                        <strong>Dale una segunda vida a tus artículos en desuso</strong> <br/>
                        Publicalos con nosotros para poder ganar dinero mientras alguien lo usa
                    </div>
                    <div className={"button-panel-element-button"}>
                        <Button label={"PUBLICAR ARTICULO"}/>
                    </div>
                </div>
                <div className={"button-panel-element"}>
                    <div className={"button-panel-element-image"}>
                        <Image publicId={"Seminario/icono_instructor"}>
                            <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        </Image>
                    </div>
                    <div className={"button-panel-element-text"}>
                        <strong>Brindá experiencias como instructor</strong> <br/>
                        Conviértete en instructor y empieza a ganar dinero
                    </div>
                    <div className={"button-panel-element-button"}>
                        <Button label={"PUBLICAR SERVICIOS"}/>
                    </div>
                </div>
            </div>
            <ExperiencePanel/>

        </div>
    );
}