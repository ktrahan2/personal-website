import React, { useState } from 'react'
import ActiveQuadrant from './ActiveQuadrant'
import { quadrantArray } from '../config/QuadrantArrayConfig'

export default function Quadrant() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    //do something to show you can click them
    const createQuadrants = () => {
        return quadrantArray.map((element, index) => {
            return (
                <div 
                    className="quadrant"
                    id={index}
                >
                    <div 
                        className={`post-container rotate-${element.rotationDirection}`} 
                        id={element.title}
                        onClick={ () => setActiveQuadrant(element) }
                    >
                        <h2 className="post-title" >{element.title}</h2>
                        {element.content.map(paragraph => {
                            return <p className="scribble-post-information">{paragraph}</p>

                        })}
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            { createQuadrants() }
            { isActiveQuadrant ? 
                <ActiveQuadrant 
                    isActiveQuadrant={isActiveQuadrant}
                    setActiveQuadrant={setActiveQuadrant}
                /> : null } 
        </>
    )
}
