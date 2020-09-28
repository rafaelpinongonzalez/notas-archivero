import React, { Component } from "react";
import ReactPlayer from 'react-player';
import Contacto from "./contacto";


export default class Inicio extends Component {
    constructor(props) {
        super(props);

        this.state ={
            contacto: null
        }

        this.handleContact = this.handleContact.bind(this);
    }

    handleContact() {
        this.setState({
            contacto: true
        })
    }

    render() {
        if (this.state.contacto) {
            return <Contacto />
        }

    return (
<div className="contenido-inicio">
        <h1>CONSTRUMAT</h1>
        <h2>CONSTRUCCIONES Y MATERIALES </h2> 
        
        <div className="video">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=i1hYRmq2mGI'
          className='react-player'
          playing
          width='100%'
          height='100%'  
        />
    
      </div>

    <div className="boton-contacto">
      <button className="btn" onClick={this.handleContact}>
            CONTACTO
          </button>
    </div>
    <div className="boton-materiales">

          <button className="btn" onClick={this.handleContact}>
            MATERIALES
          </button>
    </div>
    <button className="btn" onClick={this.handleContact}>
            CONSTRUCCIONES
          </button>


    </div>
    
    

    );
    
}
}










   
  