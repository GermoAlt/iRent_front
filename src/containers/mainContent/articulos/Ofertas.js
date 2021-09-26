import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imageNotFound from '../../../resources/images/notFound.svg'

const header = <img alt="Card" src={imageNotFound} className={"card-image"}/>;
const footer = <span>
    <Button label="Ver" style={{marginRight: '.25em'}} className="p-button-secondary"/>
    <Button label="Agregar al carrito" icon="pi pi-shopping-cart" />
</span>;

export default function Ofertas() {
    return (
        <div className={"ofertas"}>
            <h1>
                Destacados
            </h1>
            <Card className={"p-d-inline-block p-mr-2"} footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>
            <Card className={"p-d-inline-block p-mr-2"} footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>
            <Card className={"p-d-inline-block p-mr-2"} footer={footer} header={header} title={"nombre de articulo"} subTitle={"precio?"}>
                Contenido de descripcion del producto
            </Card>

        </div>

    );
}