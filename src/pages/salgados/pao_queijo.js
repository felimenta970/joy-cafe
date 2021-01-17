// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import pao_queijo from './../../assets/mobile/pao_queijo.jpg';
import pao_queijoBig from './../../assets/desktop/pao_queijo.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { paoQueijoItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const PaoQueijo = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={pao_queijo}
                imageBig={pao_queijoBig}
                dados={paoQueijoItens}
                alt="Pães de queijo em travessa"
                title="PÃES DE QUEIJO"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default PaoQueijo;