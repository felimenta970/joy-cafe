// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import almoco from './../assets/mobile/almoco-alt.jpg';
import almocoBig from './../assets/desktop/almoco.jpg';

// Import Page Layout
import PageLayout from '../components/pageLayout.js';

// Import dados
import { almocoItens, extraInfoEmpty } from "../data/dadosItens.js"; 

const Almoco = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={almoco}
                imageBig={almocoBig}
                dados={almocoItens}
                alt="Foto de prato de comida"
                title="ALMOÇO"
                extraInfo={extraInfoEmpty}
            />

        </div>
    );
}

export default Almoco;