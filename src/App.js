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

export default function App() {

    PrimeReact.ripple = true;
  return (
      <div className="App">

          <CartProvider>
            <UserProvider>
                <Router>
                  <ScrollTop/>
                      <Header/>
                      <MainContent/>
                </Router>
            </UserProvider>
          </CartProvider>

      </div>
  );
}

