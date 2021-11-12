import logo from "../../../../resources/images/logo.png";
import {InputText} from "primereact/inputtext";
import {Link} from "react-router-dom";
import React from "react";
import LoginPage from "./LoginPage";
import RegisterUser from "./RegisterUser";

const LoginContainer = (props) => {
    if (props.actionType == "register") {
        return (
            <div className={"login-dialog-content-container"}>
                <img src={logo} className='login-dialog-logo' alt='Webquill'/>
                <div className={"login-dialog-header-text"}>
                    <h2>Crear cuenta</h2>
                </div>
                <RegisterUser actionType={props.actionType} setActionType={(e) => props.setActionType(e)}
                              username={props.username} password={props.password}
                              setUsername={(e) => props.setUsername(e)} setPassword={(e) => props.setPassword(e)}
                              ocultar={() => props.ocultar()}/>
            </div>
        )
    } else if (props.actionType == "login") {
        return (
            <div className={"login-dialog-content-container"}>
                <img src={logo} className='login-dialog-logo' alt='Webquill'/>
                <div className={"login-dialog-header-text"}>
                    <h2>Acceder al sitio</h2>
                </div>
                <LoginPage actionType={props.actionType} setActionType={(e) => props.setActionType(e)}
                           username={props.username} password={props.password}
                           setUsername={(e) => props.setUsername(e)} setPassword={(e) => props.setPassword(e)}
                           ocultar={() => props.ocultar()}/>
            </div>
        )
    }
}

export default LoginContainer;