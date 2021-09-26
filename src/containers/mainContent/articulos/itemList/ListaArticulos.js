import './itemList.css'

import React, { useState} from 'react';
import articulosJson from '../../../../resources/json/products.json';
import {useParams} from "react-router";
import ItemPanel from "./ItemPanel";
import axios from "axios";

const ListaArticulos = () => {
    let articulos = [];
    axios.get("http://localhost:8000/api/product/list").then(res => {
        articulos = res.data;
        console.log(res);
    });
    const categoria = useParams().category;
    const art = articulos.filter((item) => item.category.toLowerCase().split(" ")[0] === categoria)
    return (
        <ItemPanel products={art} title={art[0].category}/>
    )
}

export default ListaArticulos;