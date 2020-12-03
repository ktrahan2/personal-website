import React, { useState } from 'react'
import ActiveQuadrant from './ActiveQuadrant'

export default function Quadrant() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    //create separate file for quadrantArray, maybe better name as well
    const quadrantArray = [
        {
            title: "About Me",
            content: ["I am a Software Developer in Denver, CO. I was introduced to coding through a python course and fell in love with it. This led to me jumping into a coding school in order to further expand my skills. I thoroughly enjoy figuring out how to take someones design dreams and turning them into a reality.", "I would love to be able to use technology in order to connect people to the outdoors. I have a passion for the outdoors and enjoy spending most of my free time being outside! Followed closely by a love for travel. I have spent most of my professional career traveling primarily in the United States and Canada. However, I also spent a fair amount of time working and living in China, Thailand, and New Zealand!"],
            rotationDirection: "left"
        }, 
        {
            //create scroller for different projects worked on
            title: "Projects",
            content: ["Coming Soon"],
            rotationDirection: "right"
        }, 
        {
            //create scroller for photos from travel etc 
            title: "Hobbies",
            content: ["Coming Soon"],
            rotationDirection: "left"
        }, 
        {
            title: "Contact",
            content: ["Email - ktrahan2@gmail.com", "Github  - https://github.com/ktrahan2", "Linkedin - https://www.linkedin.com/in/kyletrahan/"],
            rotationDirection: "right"
        }, 
    ]
    //do something to show you can click them
    const createQuadrants = () => {
        return quadrantArray.map((element, index) => {
            console.log(element.content)
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
