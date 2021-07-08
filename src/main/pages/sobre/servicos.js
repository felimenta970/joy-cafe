// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import dados
import { dadosServicos } from "../../data/dadosSobreNos.js";

import PageLayoutAbout from "../../components/PageLayoutAbout.js";

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

            <PageLayoutAbout
                dados = {dadosServicos}
                title = "SERVIÇOS"
            />

            </div>
        </Router>
    );
}

export default Servicos;