import React, {useState} from "react";
import "./experiencePanel.css"
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Image, Transformation} from "cloudinary-react";
import {Link} from "react-router-dom";

const generarCardsExperiencias = () => {
    var dict = [
        {"id": "tenis",     "price": "12500", "description": "Tenis"},
        {"id": "golf",      "price": "17000", "description": "Golf"},
        {"id": "ciclismo",  "price": "7300", "description": "Ciclismo"},
        {"id": "arqueria",  "price": "15900", "description": "Arquer\xc3\xada"},
        {"id": "padel",     "price": "17050", "description": "Padel"},
        {"id": "escalada ",  "price": "14000", "description": "Escalada"},
    ]

    return dict.map(generarCard)
}

const generarCard = (element) => {
    return (
        <div key={element.id} className={"tarjeta-experience-panel"}>
            <Link to={"/experiencias/" + element.id}>
                <Image publicId={"Seminario/" + element.id} className={"experience-image"}>
                    <Transformation width="325" height="410" crop={"scale"}/>
                    <Transformation overlay="inset_shadow2" width="1.0"
                                    height="0.4" flags="relative"
                                    gravity="south" />
                    <Transformation overlay={{fontFamily: "Arial",
                                    fontSize: 40, fontWeight: "bold",
                                    text: element.description}}
                                    gravity="south_west" x="20" y="50" color="white"/>
                    <Transformation overlay={{fontFamily: "Arial",
                                    fontSize: 20, fontWeight: "bold", text: "desde $" + element.price}}
                                    gravity="south_east" x="20" y="20" color="white"/>
                </Image>
            </Link>
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