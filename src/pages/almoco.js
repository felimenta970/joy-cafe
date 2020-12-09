// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

import almoco_alt from './../assets/almoco-alt.jpg';
import almoco from './../assets/almoco.jpg';

// Import dados
import { almocoItens } from "../data/almocoItens.js"; 

const Almoco = ({handleToggleSidebar}) => {
    return (
        <main>
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            {
            /* Header, a ser adicionado
            Transformado em um componente? */
            }

            <header>
                
            </header>

            <h1 className="categoryName">ALMOÇO</h1>

            <img src={almoco_alt} alt="Foto de prato de comida" className="heroImgMobile" />

            

            <img src={almoco} alt="Foto de prato de comida" className="heroImg" />

            {/* Criamos um div para conter a lista de itens */}
            <div className="allItens">


                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                {almocoItens.map((data, key) => {
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

        </main>
    );
}

export default Almoco;