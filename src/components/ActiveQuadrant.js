import React from 'react'

export default function ActiveQuadrant({ isActiveQuadrant, setActiveQuadrant }) {
    
    //do something to show you can click the element
    return (
        <div 
            className="expand-quadrant"
            id={isActiveQuadrant.title}
        >
            <div 
                className="post-container expand-post-container"
                id={isActiveQuadrant.title}
                onClick={ () => setActiveQuadrant("")}
            >
                <h2 className="post-title" >{isActiveQuadrant.title}</h2>
                <p className="post-information">{isActiveQuadrant.description}</p>
            </div>
        </div>
    )
}
