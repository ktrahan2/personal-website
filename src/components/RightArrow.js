import React from 'react'
import { projects } from '../config/ProjectConfig'

export default function RightArrow({ setActiveProject, isActiveProject }) {
    return (
        <div 
            id="right-arrow" 
            className="arrow"
            onClick={ () => setActiveProject(isActiveProject + 1)}
        >
        { isActiveProject < projects.length - 1 ? "right arrow" : "" }
        </div>
    )
}
