import React, { useState } from 'react'

export default function Quadrant() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    //create separate file for quadrantArray, maybe better name as well
    const quadrantArray = [
        {
            title: "who-i-am",
            description: "scribble scrabble",
            rotationDirection: "left"
        }, 
        {
            title: "projects",
            description: "scribble scrabble",
            rotationDirection: "right"
        }, 
        {
            title: "hobbies",
            description: "scribble scrabble",
            rotationDirection: "left"
        }, 
        {
            title: "contact-information",
            description: "scribble scrabble",
            rotationDirection: "right"
        }, 
    ]

    const createQuadrants = () => {
        return quadrantArray.map((element, index) => {
            return (
                <div 
                    className={isActiveQuadrant === element.title ? 
                        "quadrant expand-quadrant" 
                        : "quadrant"
                    } 
                    id={index}
                >
                    <div 
                        className={isActiveQuadrant === element.title ? 
                            "post-container expand-post-container" 
                            : `post-container rotate-${element.rotationDirection}`
                        } 
                        id={element.title}
                        onClick={ 
                            isActiveQuadrant === element.title ? 
                                () => setActiveQuadrant("") 
                            :
                                () => setActiveQuadrant(element.title)
                        }
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
        </>
    )
}
