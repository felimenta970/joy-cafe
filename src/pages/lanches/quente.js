// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

import lancheQuente from './../../assets/grilled_cheese.jpg';

// Import dados
import { lancheQuenteItens } from "./../../data/dadosItens.js"; 

const Quente = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">LANCHES QUENTES</h1>

            <img src={lancheQuente} alt="Queijo quente com manjericão" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <div className="allItens">


                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                {lancheQuenteItens.map((data, key) => {
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

export default Quente;