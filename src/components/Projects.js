import React, { useState } from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import CurrentProject from './CurrentProject'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../config/ProjectConfig'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {

    const [ isActiveProject, setActiveProject ] = useState(0)
    const pageLength = projects.length

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
                    setActivePage={ setActiveProject }
                    isActivePage={ isActiveProject }
                />
                <CurrentProject isActiveProject={ isActiveProject }/>
                <RightArrow
                    setActivePage={ setActiveProject }
                    isActivePage={ isActiveProject }
                    pageLength={pageLength}
                />
            </div>
        </>
    )
}
