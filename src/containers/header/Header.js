import './header.css'

import React, {useContext, useState} from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Menubar } from 'primereact/menubar';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import {Link, Redirect} from 'react-router-dom'
import classNames from "classnames";
import articulosJson from '../../resources/json/products.json';
import logo from '../../resources/images/logoSportX.svg';
import Login from "./login/Login";
import { CartContext } from '../../contexts/CartContext';
import useUser from "../../hooks/useUser";


export default function Header(props) {
    const [carritoCantidad] = useContext(CartContext)

    const [globalFilter, setGlobalFilter] = useState(null);

    const {user, setUser} = useUser()

    const menuItemTemplate = (icon, path, item, options) => {
        return (
            <li className={"p-menuitem"}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const redirect = (url) => {
        return <Redirect to={url} />
    }

    const menuCategories = [
        {
            "label": "Inicio",
            template: (item, options) => {
                return menuItemTemplate("pi-home", "/", item, options);
            }
        },
        {
            "label": "Artículos",
            "icon": "pi pi-fw pi-th-large",
            "items": [
                {
                    "label": "Cuadernos",
                    template: (item, options) => {
                        return menuItemTemplate("pi-book", "/articulos/cuadernos", item, options);
                    }
                },
                {
                    "label": "Carpetas",
                    template: (item, options) => {
                        return menuItemTemplate("pi-envelope", "/articulos/carpetas", item, options);
                    }
                },
                {
                    "label": "Escritura",
                    template: (item, options) => {
                        return menuItemTemplate("pi-pencil", "/articulos/escritura", item, options);
                    }
                },
                {
                    "label": "Insumos de Oficina",
                    template: (item, options) => {
                        return menuItemTemplate("pi-paperclip", "/articulos/insumos", item, options);
                    }
                },
                {
                    "label": "Otros",
                    template: (item, options) => {
                        return menuItemTemplate("pi-print", "/articulos/otros", item, options);
                    }
                }
            ]
        },
        {
            "label": "Nuevo artículo",
            template: (item, options) => {
                return menuItemTemplate("pi-plus", "/nuevo", item, options);
            }
        }]

    const leftContents = (
        <React.Fragment>
            <Link to={"/"}>
                <img src={logo} className='logo'/>
            </Link>
        </React.Fragment>
    );


    const rightContents = (
        <React.Fragment>
            <Link to={"/instructor/nuevo"}>
                <Button label={"Publicar"} icon="pi pi-plus" className="p-button-rounded p-mr-20"style={{textDecoration: 'none'}}/>
            </Link>
            {user.tipo && user.tipo === "instructor" ?
                <Link to={"/experienciasPendientes"}>
                    <Button label={"Paquetes abiertos"} icon="pi pi-calendar" className="p-button-rounded p-mr-20" />
                </Link>
            : null}
            <Button label={"Contacto"} icon="pi pi-comment" className="p-button-rounded p-mr-20" />
            <Login/>
        </React.Fragment>
    );


    return (
        <div className="app-header p-d-flex">
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}