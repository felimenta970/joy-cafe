import React from 'react';

const Loading = ({}) => {
    return (
        <div className="bgLoading">
            <h1 className="textLoading">Carregando</h1>

            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Loading;