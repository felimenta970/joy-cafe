import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';

const Main = ({handleToggleSidebar}) => {
    return (
        <Router>
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            <header>
                
            </header>

            <p>Bem vindo!</p>
            <p>Horários de funcionamento: Segunda à sexta, 7:00 até 18:00</p>
        
            
        </main>
        </Router>
    );
}

export default Main;