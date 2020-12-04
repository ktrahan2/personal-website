import React from 'react'

export default function LeftArrow({ setActiveProject, isActiveProject }) {
    
    return (
        <div 
            id="left-arrow" 
            className="arrow"
            onClick={ () => setActiveProject(isActiveProject - 1)}
        >
        { isActiveProject > 0 ? "left arrow" : "" }
        </div>
    )
}
