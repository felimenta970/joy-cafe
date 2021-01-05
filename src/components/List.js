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

                
                            <div className="itemPreco">
                                {data.itemPreco}
                            </div>

                        </div>
                    );
                })}
                
            </div>
        </Router>
    )
}

export default List;