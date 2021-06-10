import React from 'react';

// Componente para listar informações extras de certos tipos de itens
const ExtraInfoMenu = ({extraInfo}) => {
    return (
        <div>

            {extraInfo.map((data, key) => {
                return (
                    <div className="extraGroup" key={key}>

                        {/* O título principal, caso existe */}
                        <div className="extraItem">
                            {data.extraMainText}
                        </div>

                        {/* Um segundo map, para casos de múltiplos itens e/ou valores */}
                        {data.extraSubText.map((data2, key2) => {
                            return (
                                <div key={key2}>
                                    <div className="extraItemDesc">
                                        {data2.item}
                                    </div>
                                    <div className="itemPreco">
                                        {data2.price}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Valor final, caso seja único */}
                        <div className="itemPreco">
                            {data.extraPriceText}
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default ExtraInfoMenu;