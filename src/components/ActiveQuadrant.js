import React from 'react'

export default function ActiveQuadrant({ isActiveQuadrant, setActiveQuadrant }) {

    //do something to show you can click the element
    return (
        <div 
            className="expanded-quadrant"
            id={isActiveQuadrant.title}
        >
            <div 
                className="post-container expanded-post-container"
                id={isActiveQuadrant.title}
                onClick={ () => setActiveQuadrant("")}
            >
                <h2 className="post-title" >{isActiveQuadrant.title}</h2>
                {isActiveQuadrant.content.map((paragraph, index) => {
                    return <p className="post-information" key={index}>{paragraph}</p>
                })}
            </div>
        </div>
    )
}
