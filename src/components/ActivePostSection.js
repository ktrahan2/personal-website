import React from 'react'

export default function ActiveQuadrant({ isActiveQuadrant, setActiveQuadrant }) {
    console.log(isActiveQuadrant.renderFunction)
    
    return (
        <div 
            className="expanded-post-section"
            id={isActiveQuadrant.title}
        >
            <div 
                className="expanded-post-container"
                id={ isActiveQuadrant.title }
                onClick={ (event) => event.target.id === "exit-icon" ? setActiveQuadrant("") : null }
            >
                {isActiveQuadrant.renderFunction}
            </div>
        </div>
    )
}
