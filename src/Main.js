// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

const Main = ({handleToggleSidebar}) => {
    return (
        <Router>
            <main>
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>

                {
                /* Header, a ser adicionado
                Transformado em um componente? */
                }
                <header>
                    
                </header>

                {/* Corpo da página, a ser construído */}
                <body>
                    <p>Bem vindo!</p>
                    <p>Horários de funcionamento: Segunda à sexta, 7:00 até 18:00</p>

                </body>
                
            </main>
        </Router>
    );
}

export default Main;