// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import doce from './../assets/mobile/bolo_cenoura.jpg';
import doceBig from './../assets/desktop/bolo_cenoura.jpg';

// Import Page Layout
import PageLayout from '../components/pageLayout.js';

// Import dados
import { docesItens, extraInfoEmpty } from "../data/dadosItens.js"; 

const Doces = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={doce}
                imageBig={doceBig}
                dados={docesItens}
                alt="Bolo de laranja"
                title="DOCES"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Doces;