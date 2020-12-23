import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { 
    faArrowLeft
  } from '@fortawesome/free-solid-svg-icons'

export default function LeftArrow({ setActivePage, isActivePage }) {
    
    return (
        <div 
            id="left-arrow" 
            className="arrow"
            onClick={ () => setActivePage(isActivePage - 1)}
        >
        <KeyboardEventHandler 
            handleKeys={['left']}
            onKeyEvent={ isActivePage > 0 ? () => setActivePage( isActivePage - 1 ) : setActivePage( isActivePage )}
        />
        { isActivePage > 0 ? <FontAwesomeIcon icon={ faArrowLeft } /> : "" }
        </div>
    )
}
