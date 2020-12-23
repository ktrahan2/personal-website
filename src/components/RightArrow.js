import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KeyboardEventHandler from 'react-keyboard-event-handler'
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
        <KeyboardEventHandler 
            handleKeys={['right']}
            onKeyEvent={ isActivePage < pageLength - 1 ? () => setActivePage( isActivePage + 1 ) : setActivePage( isActivePage )}
        />  
        { isActivePage < pageLength - 1 ? <FontAwesomeIcon icon={ faArrowRight }/> : "" }
        </div>
    )
}
