import React from 'react'

export default function ActiveQuadrant({ isActiveQuadrant, setActiveQuadrant }) {
    
    //do something to show you can click the element
    //add ability to scroll to overflow
    return (
        <div 
            className="expanded-post-section"
            id={isActiveQuadrant.title}
        >
            <div 
                className="post-container expanded-post-container"
                id={ isActiveQuadrant.title }
                //change this onclick to an x or something similiar 
                // onClick={ (event) => event.target.className !== "arrow" ? setActiveQuadrant("") : null }
            >
                {isActiveQuadrant.renderFunction}
            </div>
        </div>
    )
}
