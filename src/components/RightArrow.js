import React from 'react'
import { projects } from '../config/ProjectConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

export default function RightArrow({ setActiveProject, isActiveProject }) {
    return (
        <div 
            id="right-arrow" 
            className="arrow"
            onClick={ () => setActiveProject(isActiveProject + 1)}
        >
        { isActiveProject < projects.length - 1 ? <FontAwesomeIcon icon={ faArrowRight }/> : "" }
        </div>
    )
}
