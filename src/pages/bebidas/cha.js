// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import cha from './../../assets/mobile/cha.jpg';
import chaBig from './../../assets/desktop/cha.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { chaItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Cha = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={cha}
                imageBig={chaBig}
                dados={chaItens}
                alt="Xícara de chá em mesa de madeira"
                title="CHÁS"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Cha;