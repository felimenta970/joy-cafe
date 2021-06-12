// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import salada from './../assets/mobile/salada.jpg';
import saladaBig from './../assets/desktop/salada.jpg';

// Import Page Layout
import PageLayout from '../components/pageLayout.js';

// Import dados
import { saladaItens, extraInfoEmpty } from "../data/dadosItens.js"; 

const Salada = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={salada}
                imageBig={saladaBig}
                dados={saladaItens}
                alt="Salada no prato"
                title="SALADAS"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Salada;