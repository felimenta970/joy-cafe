// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import omelete from './../assets/mobile/omelete.jpg';
import omeleteBig from './../assets/desktop/omelete.jpg';

// Import Page Layout
import PageLayout from '../components/pageLayout.js';

// Import dados
import { panquecaOmeleteItens } from "../data/dadosItens.js"; 

const Omelete = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={omelete}
                imageBig={omeleteBig}
                dados={panquecaOmeleteItens}
                alt="Omelete no prato"
                title="PANQUECAS E OMELETES"
            />

        </div>
    );
}

export default Omelete;