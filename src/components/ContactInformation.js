import React from 'react'
import { postSectionArray } from "../config/PostSectionArrayConfig"

export default function ContactInformation() {
    return (
        <div 
            className="expanded-quadrant"
            id={ postSectionArray[3].title }
        >
            <h2 className="post-title" >{ postSectionArray[3].title }</h2>
            {postSectionArray[3].content.map(( paragraph, index ) => {
                return <p className="post-information" key={ index }>{ paragraph }</p>
            })}
        </div>
    )
}
