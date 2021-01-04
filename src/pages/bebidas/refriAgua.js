// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';


import refri from './../../assets/mobile/refri.jpg';

// Import dados
import { refriItens } from "./../../data/dadosItens.js"; 

const Refri = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">REFRIGERANTES E ÁGUA</h1>

            <img src={refri} alt="Lata de coca cola no fundo preto" className="heroImgMobile" />

            

            {/* Criamos um div para conter a lista de itens */}
            <div className="allItens">


                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                {refriItens.map((data, key) => {
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

export default Refri;