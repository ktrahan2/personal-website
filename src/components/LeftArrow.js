import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowLeft
  } from '@fortawesome/free-solid-svg-icons'
//change name of setActiveProject. and the value is represents in Project.js and Hobby.js
export default function LeftArrow({ setActivePage, isActivePage }) {
    
    return (
        <div 
            id="left-arrow" 
            className="arrow"
            onClick={ () => setActivePage(isActivePage - 1)}
        >
        { isActivePage > 0 ? <FontAwesomeIcon icon={ faArrowLeft } /> : "" }
        </div>
    )
}
