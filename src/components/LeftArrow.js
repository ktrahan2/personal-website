import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowLeft
  } from '@fortawesome/free-solid-svg-icons'

export default function LeftArrow({ setActiveProject, isActiveProject }) {
    
    return (
        <div 
            id="left-arrow" 
            className="arrow"
            onClick={ () => setActiveProject(isActiveProject - 1)}
        >
        { isActiveProject > 0 ? <FontAwesomeIcon icon={ faArrowLeft } /> : "" }
        </div>
    )
}
