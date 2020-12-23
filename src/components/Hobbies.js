import React, { useState } from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import CurrentPicture from './CurrentPicture'
import LeftArrow from "./LeftArrow"
import RightArrow from './RightArrow'
import { pictures } from "../config/PictureConfig"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTimesCircle
  } from '@fortawesome/free-solid-svg-icons'

export default function Hobbies() {

    const [ isCurrentPicture, setCurrentPicture ] = useState(0)
    const pageLength = pictures.length
    
    return (
        <>
            <div className="post-header">
                <h2 className="post-title" >{ postSectionArray()[2].title }</h2>
                <FontAwesomeIcon 
                    id="exit-icon" 
                    icon={ faTimesCircle }
                />
            </div>
            <div className="carousel-container">
                <LeftArrow 
                    setActivePage={ setCurrentPicture }
                    isActivePage={ isCurrentPicture }
                />
                <CurrentPicture isCurrentPicture={isCurrentPicture}/>
                <RightArrow
                    setActivePage={ setCurrentPicture }
                    isActivePage={ isCurrentPicture }
                    pageLength={pageLength}
                />
            </div>
        </>
        
    )
}
