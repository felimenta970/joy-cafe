// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import suco from './../../assets/mobile/suco.jpg';
import sucoBig from './../../assets/desktop/suco.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { sucoItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Suco = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={suco}
                imageBig={sucoBig}
                dados={sucoItens}
                alt="Suco de laranja no copo e laranjas ao fundo"
                title="SUCOS"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Suco;