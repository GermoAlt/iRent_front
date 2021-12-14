import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import React, {useState} from "react";
import PrimeReact from 'primereact/api';
import { ScrollTop } from 'primereact/scrolltop'
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/header/Header";
import MainContent from "./containers/mainContent/MainContent";

import { Provider as CartProvider } from './contexts/CartContext'
import {UserProvider} from './contexts/UserContext'
import {CloudinaryContext} from "cloudinary-react";
import Footer from "./containers/footer/footer";
import background from "./resources/images/background.png"

export default function App() {

    PrimeReact.ripple = true;
  return (
      <div className="App" style={{backgroundImage: `url(${background})`}}>
          <CloudinaryContext cloudName={"remote-german"} secure={true} className={"main-panel-container"}>
              <CartProvider>
                  <UserProvider>
                      <Router>
                          <ScrollTop/>
                          <Header/>
                          <div className={"main-panel-container"}>
                              <MainContent />
                              <Footer/>
                          </div>
                    </Router>
                </UserProvider>
              </CartProvider>
          </CloudinaryContext>
      </div>
  );
}

