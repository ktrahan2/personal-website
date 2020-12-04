import React, { useState } from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import CurrentProject from './CurrentProject'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow'

export default function Projects() {

    const [ isActiveProject, setActiveProject ] = useState(0)

    return (
        <>
            <h2 className="post-title" >{ postSectionArray()[1].title }</h2>
            <div className="carousel-container"> 
                <LeftArrow 
                    setActiveProject={setActiveProject}
                    isActiveProject={isActiveProject}
                />
                <CurrentProject isActiveProject={isActiveProject}/>
                <RightArrow
                    setActiveProject={setActiveProject}
                    isActiveProject={isActiveProject}
                />
            </div>
        </>
    )
}
