import './userProfile.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import {Redirect} from "react-router";
import React, {useState} from "react";
import useUser from "../../../hooks/useUser";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Calendar} from "primereact/calendar";
import UserInformationPanel from "./UserInformationPanel";
import ResponsiveDrawer from "./Drawer";
import ProfileContent from "./ProfileContent";


const UserProfile = () => {
    const {user, changeUser} = useUser();
    const {activeIndex, setActiveIndex} = useState(0)

    let nombre = user.nombre;
    let apellido = user.apellido;
    let domicilio = user.domicilio;
    let du = user.du;
    let telefono = user.telefono;

    /*if(user.tipo !== "user"){
        return <Redirect to={"/"}/>
    }*/

    const guardarCambios = () => {

    }


    const generateTab = (method) => {
        return <AccordionTab header={"header"}>test</AccordionTab>
    }


    function generatePaymentMethodTabs(data){
        data.forEach(method => generateTab(method));
    }

    return(
        <div className={"userProfile"}>
            {/*<UserInformationPanel></UserInformationPanel>*/}
            <ProfileContent />
            <Accordion className={"checkout-accordion"} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            </Accordion>
        </div>
    )
}

/*
username:
password:
tipo: req.
nombre: re
apellido:
du: req.bo
domicilio:
telefono:
status: re
 */

export default UserProfile