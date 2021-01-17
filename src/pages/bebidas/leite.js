// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

// Import imagens
import leite from './../../assets/mobile/leites.jpg';
import leiteBig from './../../assets/desktop/leites.jpg';

// Import Page Layout
import PageLayout from '../../components/pageLayout.js';

// Import dados
import { leiteItens, extraLeite } from "./../../data/dadosItens.js"; 


export const extraInfo = [
    {
    mainText: "",
    subText: "Adicional de Chantily ou Marshmallow",
    priceText: "R$ 2,50",
    }
]

const Leite = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {/* Chamada de layout de página */}
            <PageLayout
                image={leite}
                imageBig={leiteBig}
                dados={leiteItens}
                alt="Chocolate quente em uma xícara"
                title="LEITES"
                extraInfo={extraLeite}
            />

            <div className="itemType">

            </div>

            <div className="itemPreco">
                
            </div>

        </div>
    );
}

export default Leite;