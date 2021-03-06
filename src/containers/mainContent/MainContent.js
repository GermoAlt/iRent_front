import React from "react";
import { Switch, Route } from "react-router-dom";
import {Redirect} from "react-router";
import HomePage from "./homePage/HomePage";
import TransactionLog from "./adminPanel/TransactionLog";
import ProductPanel from "./adminPanel/ProductPanel";
import Carrito from "./cart/Carrito";
import ProductDetails from "./articulos/productDetails/ProductDetails";
import UserProfile from "./userProfile/UserProfile";
import PackageList from "./packages/PackageList";
import InstructorPanel from "./instructor/InstructorPanel";
import PackageDetails from "./packages/PackageDetails";
import "./mainContent.css"
import Banner from "../../components/banner/Banner";
import SearchPanel from "./homePage/searchPanel/SearchPanel";
import OrderSuccessful from "./checkout/OrderSuccessful";
import RacketEdit from "./packages/RacketEdit";

export default function MainContent(props){
 return (
    <div>
        <div className={"top_panel_banner"}>
            <Switch>
                <Route exact path={"/"} component={SearchPanel}/>
                <Route path={"/experiencias/:deporte"} component={Banner}/>
                <Route path={"/experienciasPendientes"} component={Banner}/>
            </Switch>
        </div>
        <div className={"mainContent"}>
           <Switch>
               <Route exact path="/" component={HomePage}/>
               <Route path={"/experiencias/:deporte"} component={PackageList}/>
               <Route path={"/experienciasPendientes"} component={InstructorPanel}/>
               <Route path="/transacciones" component={TransactionLog}/>
               <Route path="/gestionProductos" component={ProductPanel}/>
               <Route path="/carrito" component={Carrito}/>
               <Route path="/producto/:id"component={ProductDetails}/>
               <Route exact path="/perfil" component={UserProfile}/>
               <Route path="/detallePaquete/:id" component={PackageDetails}/>
               <Route path={"/ordenExitosa"} component={OrderSuccessful} />
               <Route path={"/editarPaquete"} component={RacketEdit} />

               <Redirect to={"/"} />
           </Switch>
        </div>
     </div>
 );
}