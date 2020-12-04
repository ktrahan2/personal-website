import React, { useState } from 'react'
import ActiveQuadrant from './ActivePostSection'
import postSectionArray from '../config/PostSectionArrayConfig'

export default function PostSection() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    //do something to show you can click them
    const createQuadrants = () => {
        return postSectionArray().map(( element, index ) => {
            return (
                <div 
                    className="post-section"
                    id={ index }
                >
                    <div 
                        className={`post-container rotate-${ element.rotationDirection }`} 
                        id={ element.title }
                        onClick={ () => setActiveQuadrant( element ) }
                    >
                        <h2 className="post-title" >{ element.title }</h2>
                        { element.content.map(paragraph => {
                            return <p className="scribble-post-information">{ paragraph }</p>

                        })}
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            { createQuadrants() }
            { isActiveQuadrant ? 
                <ActiveQuadrant 
                    isActiveQuadrant={isActiveQuadrant}
                    setActiveQuadrant={setActiveQuadrant}
                    // isActiveProject={isActiveProject}
                /> : null } 
        </>
    )
}
