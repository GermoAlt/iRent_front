import React, {useState} from "react";
import "./experiencePanel.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Image, Transformation} from "cloudinary-react";

const generarCardsExperiencias = () => {
    var dict = [
        {"id": "tenis", "description": "Tenis"},
        {"id": "golf", "description": "Golf"}
    ]

    return dict.map(generarCard)
}

const generarCard = (element) => {
    return (
        <div key={element.id}>
            <Image publicId={"Seminario/" + element.id}>
                <Transformation width="325" height="410" crop={"scale"}/>
            </Image>
            <p>{element.text}</p>
        </div>
    )
}

export default function ExperiencePanel() {

    return(
        <div className={"home-page-experience-panel"}>
            <div className={"experience-panel-separator"}>
                Desafiate y viví una experiencia deportiva inolvidable
            </div>
            <div className={"experience-panel-list"}>
                {generarCardsExperiencias()}
            </div>
        </div>
    )
}