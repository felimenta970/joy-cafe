import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons

const List = ({dataItem}) => {
    return (
        <Router>
            <div className="allItens">

                {/* Do arquivo, pegamos os dados e uma chave para cada um */}
                
                {dataItem.map((data, key) => {
                    return (
                        {/* Exibimos o conteúdo e damos um nome de classe para cada um */},
                        <div className="itemGroup" key={key}>

                            <div className="itemName">
                                {data.itemName}
                            </div>
                            

                            <div className="itemDesc">
                                {data.itemDesc}
                            </div>
                            
                            {data.itemPreco.map((data2) => {
                                return (

                                    <div className="itemPrecoGroup">

                                        <div className="itemType">
                                            {data2.itemType}                           
                                        </div>

                                        <div className="itemPreco">
                                            {data2.itemValue}
                                        </div>


                                    </div>
                                );
                            })}

                        </div>
                    );
                })}
                
            </div>
        </Router>
    )
}

export default List;