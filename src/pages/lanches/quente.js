// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import lancheQuente from './../../assets/mobile/grilled_cheese.jpg';
import lancheQuenteBig from './../../assets/desktop/grilled_cheese.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { lancheQuenteItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Quente = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={lancheQuente}
                imageBig={lancheQuenteBig}
                dados={lancheQuenteItens}
                alt="Queijo quente com manjericão"
                title="LANCHES QUENTES"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Quente;