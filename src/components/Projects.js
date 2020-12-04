import React from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"
import CurrentProject from './CurrentProject'
import { projects } from '../config/ProjectConfig'

export default function Projects({ isActiveProject, setActiveProject }) {

    return (
        <>
            <h2 className="post-title" >{ postSectionArray()[1].title }</h2>
            <div className="carousel-container"> 
                <div 
                    id="left-arrow" 
                    className="arrow"
                    onClick={ () => setActiveProject(isActiveProject - 1)}
                >
                { isActiveProject > 0 ? "left arrow" : "" }
                </div>
                    <CurrentProject isActiveProject={isActiveProject}/>
                <div 
                    id="right-arrow" 
                    className="arrow"
                    onClick={ () => setActiveProject(isActiveProject + 1)}
                >
                { isActiveProject < projects.length - 1 ? "right arrow" : "" }
                </div>
            </div>
        </>
    )
}
