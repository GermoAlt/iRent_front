import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button'
import  productosJson  from '../../../resources/json/products.json'
import imageNotFound from '../../../resources/images/notFound.svg'
import {useHistory} from "react-router";

export default function CarouselPrincipal() {

    const history = useHistory();
    const [productos] = useState(productosJson.data);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const redirect = (id) => {
        history.push(`/producto/${id}`);
    }


const productTemplate = (producto) => {
    return (
        <div className="product-item">
            <div className="product-item-content">
                <div className="p-mb-3">
                    <img src={`${producto.image}`} onError={(e) => e.target.src=`${imageNotFound}`} alt={producto.name} className="carousel-product-image" />
                </div>
                <div>
                        <h4 className="p-mb-1">{producto.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${producto.price}</h6>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" onClick={() => redirect(producto.id)}/>
                        </div>
                </div>
            </div>
        </div>
    );
}



    return (
        <div className={"carousel-principal"}>
            <Carousel value={productos} itemTemplate={productTemplate}
                      numVisible={3} numScroll={1}
                      header={<h1>Ofertas</h1>}
                      responsiveOptions={responsiveOptions}
                      circular/>
        </div>
    );
}
