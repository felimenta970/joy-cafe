// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

const Main = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>

                {
                /* Header, a ser adicionado
                Transformado em um componente? */
                }
                <div>
                    
                </div>

                {/* Corpo da página, a ser construído */}
                <div>
                    <p>Bem vindo!</p>
                    <p>Horários de funcionamento: Segunda à sexta, 7:00 até 18:00</p>

                </div>
                
            </div>
        </Router>
    );
}

export default Main;