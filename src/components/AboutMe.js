import React from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'

export default function AboutMe() {
    return (
        <>
            <div className="post-header">
                <h2 className="post-title" >{ postSectionArray()[1].title }</h2>
                <FontAwesomeIcon 
                    id="exit-icon" 
                    icon={ faTimesCircle }
                />
            </div>
            { postSectionArray()[1].content.map((paragraph, index) => {
                return <p className="post-information" key={index}>{paragraph}</p>
            })}
        </>
    )
}
