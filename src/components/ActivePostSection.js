import React from 'react'

export default function ActiveQuadrant({ isActiveQuadrant, setActiveQuadrant }) {
    
    //add ability to scroll to overflow
    return (
        <div 
            className="expanded-post-section"
            id={isActiveQuadrant.title}
        >
            <div 
                className="post-container expanded-post-container"
                id={ isActiveQuadrant.title }
                onClick={ (event) => event.target.id === "exit-icon" ? setActiveQuadrant("") : null }
            >
                {isActiveQuadrant.renderFunction}
            </div>
        </div>
    )
}
