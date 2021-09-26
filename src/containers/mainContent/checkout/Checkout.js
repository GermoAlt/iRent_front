import './checkout.css'

import React, { useState, useEffect, useRef, useContext } from 'react';
import {Steps} from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { CartContext } from '../../../contexts/CartContext';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Checkout = () =>{
    const [products, setProducts] = useContext(CartContext)

    const precioTotal = products.reduce((acc, curr) => acc + curr.price, 0);


    const [activeIndex, setActiveIndex] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const toast = useRef(null);
    const items = [
        {
            label: 'Artículos',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Artículos en carrito', detail: event.item.label});
            }
        },
        {
            label: 'Pago',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Métodos de pago', detail: event.item.label });
            }
        },
        {
            label: 'Confirmación',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Finalizar', detail: event.item.label });
            }
        }
    ];

    const changeToStep = (step) => {
        setActiveIndex(step);
    }

    return (
        
        <div className="steps-demo">

            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>
                    <span>Artículos en carrito: {products.length}</span>
                        <br />
                    <span>Total: ${precioTotal}</span>
                </h5>

                <Steps model={items} activeIndex={activeIndex}  readOnly={true}/>
                <Step1 visible={activeIndex} changeToStep={(num) => changeToStep(num)}/>
                <Step2 visible={activeIndex} changeToStep={(num) => changeToStep(num)}/>
                <Step3 visible={activeIndex} changeToStep={(num) => changeToStep(num)}/>
            </div>
        </div>
    );
}

export default Checkout;