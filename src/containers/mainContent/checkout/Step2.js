import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import {InputText} from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar';
import {useState} from "react";
import {Button} from "primereact/button";
import UserProfile from "../userProfile/UserProfile";

const Step2 = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');

    return (
        <div className={`${props.visible !== 1 ? "hidden" : ""}`}>

            <Button className={"checkout-accordion-tab-button p-button-secondary"} icon={"pi pi-arrow-circle-left"} label={"Atrás"} onClick={() => props.changeToStep(0)}/>
            <Button className={"checkout-accordion-tab-button"} iconPos={"right"} icon={"pi pi-arrow-circle-right"} label={"Siguiente"} onClick={() => props.changeToStep(2)}/>
            <UserProfile/>
        </div>
    )
}

export default Step2;