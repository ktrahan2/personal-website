import React, { useState } from 'react'

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

    const createActiveQuadrant = (element) => {
        console.log('element', element)
        // setActiveQuadrant(element.title)
        console.log("active", isActiveQuadrant)
        return (
            <div 
                className="expand-quadrant"
                // id={element.title}
            >
                <div 
                    className="post-container expand-post-container"
                    // id={element.title}
                    onClick={ () => setActiveQuadrant("")}
                >
                    {/* <h2 className="post-title" >{element.title}</h2> */}
                    {/* <p className="post-information">{element.description}</p> */}
                </div>
            </div>
        )
    }

    //create new div instead of expanding the selected one. 
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
                        onClick={ () => {
                            setActiveQuadrant(element.title)
                            createActiveQuadrant(element)
                        }}
                        //     isActiveQuadrant === element.title ? 
                        //         () => setActiveQuadrant("") 
                        //     :
                        //         () => setActiveQuadrant(element.title)
                        // }
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
            { isActiveQuadrant != "" ? createActiveQuadrant() : null} 
        </>
    )
}
