// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import cafe from './../../assets/mobile/cafe.jpg';
import cafeBig from './../../assets/desktop/cafe.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { cafeItens } from "./../../data/dadosItens.js"; 

const Cafe = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={cafe}
                imageBig={cafeBig}
                dados={cafeItens}
                alt="Xícara de café"
                title="CAFÉS"
            />

        </div>
    );
}

export default Cafe;