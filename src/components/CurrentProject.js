import React from 'react'
import { projects } from '../config/ProjectConfig'

export default function CurrentProject({ isActiveProject }) {

    return (
        <div className="project-container">
            <h2>{projects[isActiveProject].title}</h2>
            <p key={projects[isActiveProject].description}>{projects[isActiveProject].description}</p>
            <a href={projects.demo}>Demo</a>
            <a href={projects.github}>Github Repo</a>
        </div>
    )
}
