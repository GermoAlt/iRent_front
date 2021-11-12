import React from "react";
import { Switch, Route } from "react-router-dom";
import {Redirect} from "react-router";
import HomePage from "./homePage/HomePage";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";
import Carrito from "./cart/Carrito";
import ProductDetails from "./articulos/productDetails/ProductDetails";
import UserProfile from "./userProfile/UserProfile";
import Footer from "../footer/footer";

export default function MainContent(props){
 return (
   <div className={"mainContent"}>
       <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route path="/transacciones" component={TransactionLog}/>
           <Route path="/gestionProductos" component={ProductPanel}/>
           <Route path="/carrito" component={Carrito}/>
           <Route path="/producto/:id"component={ProductDetails}/>
           <Route path="/perfil" component={UserProfile}/>

           <Redirect to={"/"} />
       </Switch>
   </div>
 );
}