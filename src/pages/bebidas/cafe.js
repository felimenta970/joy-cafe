// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

import cafe from './../../assets/mobile/cafe.jpg';

// Import dados
import { cafeItens } from "./../../data/dadosItens.js"; 

const Cafe = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">CAFÉS</h1>

            <img src={cafe} alt="Xícara de café" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <div className="allItens">


                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                {cafeItens.map((data, key) => {
                    return (
                        {/* Exibimos o conteúdo e damos um nome de classe para cada um */},
                        <div className="itemGroup" key={key}>

                            <div className="itemName">
                                {data.itemName}
                            </div>


                            <div className="itemDesc">
                                {data.itemDesc}
                            </div>

                            <div className="itemPreco">
								{data.itemPreco}
							</div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default Cafe;