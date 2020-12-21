import React from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'
import MyForm from "./MyForm"

export default function ContactInformation() {
    return (
        <div 
            className="expanded-quadrant"
            id={ postSectionArray()[3].title }
        >
            <div className="post-header">
                <h2 className="post-title" >{ postSectionArray()[3].title }</h2>
                <FontAwesomeIcon 
                    id="exit-icon" 
                    icon={ faTimesCircle }
                />
            </div>
            <MyForm/>
            <div id="contact-links">
                {/* links stand out maybe restyle? */}
                <a href="https://www.linkedin.com/in/kyletrahan/">Linkedin</a>
                <a href="https://github.com/ktrahan2">Github</a>
            </div>
        </div>
    )
}
