// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

import Map from './components/Maps.js';

const location = {
    address: 'R. Joaquim Antônio Nascimento, 156',
    lat: -21.210775051346815,
    lng: -47.81274930995369,
  }

const Main = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                    
                </div>

                <h1 className="categoryName">ALMOÇO</h1> 

                {/* Corpo da página, a ser construído */}
                <div>
                    <p>Bem vindo!</p>

                    <p>Horários de funcionamento: Segunda à sexta, 7:00 até 18:00</p>

                </div>

                <Map location = {location} zoomLevel = {18} />
                
            </div>
        </Router>
    );
}

export default Main;