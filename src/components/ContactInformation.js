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
        </div>
    )
}
