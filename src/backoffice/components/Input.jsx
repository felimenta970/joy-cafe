import React from 'react'

export default ({type, placeholder, label}) => (
    <>
        <label>
            <div className="label">{label}</div>
            
            <input
                type={type}
                placeholder={placeholder}
            >
            </input>
        </label>
        
        
        
    </>
    
)