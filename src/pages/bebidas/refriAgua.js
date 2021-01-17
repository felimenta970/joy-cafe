// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import refri from './../../assets/mobile/refri.jpg';
import refriBig from './../../assets/desktop/refri.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { refriItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Refri = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={refri}
                imageBig={refriBig}
                dados={refriItens}
                alt="Lata de coca cola no fundo preto"
                title="REFRIGERANTES E ÁGUA"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Refri;