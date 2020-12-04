import React from 'react'
import { postSectionArray } from "../config/PostSectionArrayConfig"

export default function Projects() {
    return (
        <>
            <h2 className="post-title" >{ postSectionArray[1].title }</h2>
            <div className="carousel-container">
                <div id="left-arrow" className="arrow">
                left arrow
                </div>
                <div className="project-container">
                project details
                </div>
                <div id="right-arrow" className="arrow">
                right arrow
                </div>
            </div>
        </>
    )
}
