import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowRight
  } from '@fortawesome/free-solid-svg-icons'

export default function RightArrow({ pageLength, setActivePage, isActivePage }) {
    return (
        <div 
            id="right-arrow" 
            className="arrow"
            onClick={ () => setActivePage(isActivePage + 1)}
        >
        { isActivePage < pageLength - 1 ? <FontAwesomeIcon icon={ faArrowRight }/> : "" }
        </div>
    )
}
