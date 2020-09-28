import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navigatio from "./navegacion/Navigation";
import Inicio from "./paginas/inicio";
import contacto from "./paginas/contacto";
import materiales from "./paginas/materiales";
import blog from "./paginas/blog";
import Contacto from './paginas/contacto';

export default class App extends Component {
  render() {
    return (
        <Inicio />
        
    );
  }
  
}
