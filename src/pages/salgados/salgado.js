// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import salgado from './../../assets/mobile/salgado.jpg';
import salgadoBig from './../../assets/desktop/salgado.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { salgadosItens, extraInfoEmpty } from "./../../data/dadosItens.js"; 

const Salgado = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={salgado}
                imageBig={salgadoBig}
                dados={salgadosItens}
                alt="Croassaint sendo polvilhado"
                title="SALGADOS"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Salgado;