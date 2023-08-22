import React from "react";
import {Route, Routes} from "react-router-dom";
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

export default function MainContent(){
 return (
    <div>
        <div className={"top_panel_banner"}>
            <Routes>
                <Route exact path={"/"} element={<SearchPanel />}/>
                <Route path={"/experiencias/:deporte"} element={<Banner/>}/>
                <Route path={"/experienciasPendientes"} element={<Banner/>}/>
            </Routes>
        </div>
        <div className={"mainContent"}>
           <Routes>
               <Route exact path="/" element={<HomePage/>}/>
               <Route path={"/experiencias/:deporte"} element={<PackageList/>}/>
               <Route path={"/experienciasPendientes"} element={<InstructorPanel/>}/>
               <Route path="/transacciones" element={<TransactionLog/>}/>
               <Route path="/gestionProductos" element={<ProductPanel/>}/>
               <Route path="/carrito" element={<Carrito/>}/>
               <Route path="/producto/:id" element={<ProductDetails/>}/>
               <Route exact path="/perfil" element={<UserProfile/>}/>
               <Route path="/detallePaquete/:id" element={<PackageDetails/>}/>
               <Route path={"/ordenExitosa"} element={<OrderSuccessful/>} />
               <Route path={"/editarPaquete"} element={<RacketEdit/>} />
           </Routes>
        </div>
     </div>
 );
}
