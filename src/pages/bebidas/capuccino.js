// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import capuccino from './../../assets/mobile/cappuccino.jpg';
import capuccinoBig from './../../assets/desktop/cappuccino.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { capuccinoItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Capuccino = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={capuccino}
                imageBig={capuccinoBig}
                dados={capuccinoItens}
                alt="Copo de capuccino"
                title="CAPUCCINOS"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Capuccino;