import './homePage.css';
import logo from '../../../resources/images/logo.svg';
import React from "react";
import CarouselPrincipal from "./CarouselPrincipal";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <div className={"home-page-banner"}>
                <img src={logo} alt={"logo"}/>
            </div>
            <CarouselPrincipal />
        </div>
    );
}