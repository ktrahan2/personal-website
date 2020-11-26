import React, { useState } from 'react'
import ActiveQuadrant from './ActiveQuadrant'

export default function Quadrant() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    //create separate file for quadrantArray, maybe better name as well
    const quadrantArray = [
        {
            title: "Who I Am",
            description: "scribble scrabble",
            rotationDirection: "left"
        }, 
        {
            title: "Projects",
            description: "scribble scrabble",
            rotationDirection: "right"
        }, 
        {
            title: "Hobbies",
            description: "scribble scrabble",
            rotationDirection: "left"
        }, 
        {
            title: "Contact",
            description: "scribble scrabble",
            rotationDirection: "right"
        }, 
    ]
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
                        <p className="post-information">{element.description}</p>
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
