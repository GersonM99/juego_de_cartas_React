import React, { Component } from 'react';
import './header.css'; 

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='titulo'></div>
                <div>
                <button className='"boton-reiniciar'>
                    reiniciar
                </button>
            </div>
            <div className='titulo'>
                intentos:
            </div>
            </header>
        )
    }
}