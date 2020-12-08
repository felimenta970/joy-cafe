import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';

const Almoco = ({handleToggleSidebar}) => {
    return (
        <Router>
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            <header>
                
            </header>

            <h1>ALMOÇO</h1>

            
            <div className="almocoItem">Filé de Frango com batata frita</div>
            <div className="almocoDesc">Arroz, feijão, filé de frango grelhado, batata frita salada de beterraba</div>
            <div className="almocoPreco">R$ 17,90</div>
        
            
        </main>
        </Router>
    );
}

export default Almoco;