// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import leite from './../../assets/mobile/leites.jpg';
import leiteBig from './../../assets/desktop/leites.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { leiteItens } from "./../../data/dadosItens.js"; 

const Leite = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={leite}
                imageBig={leiteBig}
                dados={leiteItens}
                alt="Chocolate quente em uma xícara"
                title="LEITES"
            />

        </div>
    );
}

export default Leite;