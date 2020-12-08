import React from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'

export default function Hobbies() {
    return (
        <>
            <div className="post-header">
                <h2 className="post-title" >{ postSectionArray()[2].title }</h2>
                <FontAwesomeIcon 
                    id="exit-icon" 
                    icon={ faTimesCircle }
                />
            </div>
            <p>Coming Soon</p>
        </>
    )
}
