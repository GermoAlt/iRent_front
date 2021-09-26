import React, {useContext} from "react";
import { CartContext } from '../../../contexts/CartContext';
import {Button} from 'primereact/button'

const Step1 = (props) => {


    const [products, setProducts] = useContext(CartContext)

    const precioTotal = products.reduce((acc, curr) => acc + curr.price, 0);


    return (

        <div className={`${props.visible !== 0 ? "hidden" : ""}`}>
            <Button className={"checkout-accordion-tab-button"} iconPos={"right"} icon={"pi pi-arrow-circle-right"} label={"Siguiente"} onClick={() => props.changeToStep(1)}/>
            <div className={"cart-item-list-step-1"}>
                {products.map (product => {
                    return(
                        <div key={product.id} className="tarjeta">
                            <a>
                                <img src={product.image}/>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>  
                                <p>${product.price}</p>
                            </a>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Step1;