// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

import PageLayoutAbout from "../../components/PageLayoutAbout.js";

import { dadosSobreNos } from "../../data/dadosSobreNos.js";

const Sobre = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                    
                </div>

                <PageLayoutAbout
                    dados = {dadosSobreNos}
                    title = "SOBRE NÓS"
                />

            </div>

        </Router>
    );
}

export default Sobre;