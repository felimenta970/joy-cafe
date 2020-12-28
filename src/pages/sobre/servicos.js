// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


// Import icons
import { FaBars } from 'react-icons/fa';

const Servicos = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                    
                </div>

                

                {/* Corpo da página, a ser construído */}
                <div>
                    <p>Serviços</p>

                    <p>Horários de funcionamento: Segunda à sexta, 7:00 até 18:00</p>

                </div>
                
            </div>
        </Router>
    );
}

export default Servicos;