import React, {useState} from "react";
import "./experiencePanel.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Image, Transformation} from "cloudinary-react";

const generarCardsExperiencias = () => {
    return (
        <div className={"experience-panel-card"}>
            <Image publicId={"Seminario/ciclismo"}>
                <Transformation width="325" height="410" crop={"scale"}/>
            </Image>
            <p>Ciclismo</p>
            <p>desde 900$</p>
        </div>
    )
}

export default function ExperiencePanel() {

    return <div className={"home-page-experience-panel"}>
        {generarCardsExperiencias()}
    </div>
}