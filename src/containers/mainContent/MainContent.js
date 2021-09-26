import React from "react";
import { Switch, Route } from "react-router-dom";
import {Redirect} from "react-router";
import HomePage from "./homePage/HomePage";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";
import ListaArticulos from "./articulos/itemList/ListaArticulos";
import Carrito from "./cart/Carrito";
import Checkout from "./checkout/Checkout";
import ProductDetails from "./articulos/productDetails/ProductDetails";
import UserProfile from "./userProfile/UserProfile";

export default function MainContent(props){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route path="/articulos/:category" component={ListaArticulos}/>
           <Route path="/transacciones" component={TransactionLog}/>
           <Route path="/gestionProductos" component={ProductPanel}/>
           <Route path="/carrito" component={Carrito}/>
           <Route path="/producto/:id"component={ProductDetails}/>
           <Route path="/carrito" component={Carrito}/>
           <Route path="/checkout" component={Checkout}/>
           <Route path="/perfil" component={UserProfile}/>

           <Redirect to={"/"} />
       </Switch>
   </div>
 );
}