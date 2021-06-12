// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import sand_natural from './../../assets/mobile/sand_natural.jpg';
import sand_naturalBig from './../../assets/desktop/sand_natural.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { lancheNaturalItens, extraLancheNatural } from "./../../data/dadosItens.js"; 

const Natural = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={sand_natural}
                imageBig={sand_naturalBig}
                dados={lancheNaturalItens}
                alt="Dois lanches naturais com tomate, cebola e queijo"
                title="LANCHES NATURAIS"
                extraInfo={extraLancheNatural}
            />

        </div>
    );
}

export default Natural;