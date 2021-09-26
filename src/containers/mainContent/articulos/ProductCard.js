import React, {useContext} from 'react';
import { Button } from 'primereact/button';
import { CartContext } from '../../../contexts/CartContext';
import {useHistory} from "react-router";


export const ProductCard = (props) => {
    const [cart, setCart] = useContext(CartContext)
    const history = useHistory();
    
    const agregarCarrito = () => {
      const cuaderno = {props};
        setCart(carritoActual => [...carritoActual, cuaderno.props])
    }

    const redirect = (id) => {
        history.push(`/producto/${id}`);
    }


    return (
        <div>
            <span className={`product-badge status-${props.inventoryStatus.toLowerCase()}`}>{props.inventoryStatus}</span>
            <div id={props.id} className="tarjeta p-card">
                <a>
                    <img src={props.image}/>
                    <h3>{props.name}</h3>
                    <p>${props.price}</p>
                </a>

                    <Button label="Ver" style={{marginRight: '.25em'}} className="p-button-secondary" onClick={() => redirect(props.id)}/>
                    <Button label="Agregar al carrito" disabled={props.inventoryStatus === 'OUTOFSTOCK'} icon="pi pi-shopping-cart" onClick={agregarCarrito}/>
            </div>
        </div>
    )
}


