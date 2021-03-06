import React from 'react'
import { projects } from '../config/ProjectConfig'

export default function CurrentProject({ isActiveProject }) {
    
    return (
        <div className="project-container">
            <h2 class="project-title">{projects[isActiveProject].title}</h2>
            <p class="post-information" key={projects[isActiveProject].description}>{projects[isActiveProject].description}</p>
            <div className="links">
                <a href={projects[isActiveProject].demo}>Demo</a>
                <a href={projects[isActiveProject].github}>Github Repo</a>
            </div>
        </div>
    )
}
