import React, { useState } from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import CurrentProject from './CurrentProject'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {

    const [ isActiveProject, setActiveProject ] = useState(0)

    //update arrows to larger size
    return (
        <>
            <div className="post-header">
                <h2 className="post-title" >{ postSectionArray()[1].title }</h2>
                <FontAwesomeIcon 
                    id="exit-icon" 
                    icon={ faTimesCircle }
                />
            </div>
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
