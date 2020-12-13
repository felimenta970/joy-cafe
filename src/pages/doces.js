// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

import doce from './../assets/bolo_cenoura.jpg';

// Import dados
import { docesItens } from "../data/dadosItens.js"; 

const Doces = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">DOCES</h1>

            <img src={doce} alt="Foto de prato de comida" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <div className="allItens">


                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                {docesItens.map((data, key) => {
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

export default Doces;