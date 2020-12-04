import React from 'react'
import { quadrantArray } from "../config/QuadrantArrayConfig"

export default function ContactInformation() {
    return (
        <div 
            className="expanded-quadrant"
            id={quadrantArray[3].title}
        >
            <h2 className="post-title" >{quadrantArray[3].title}</h2>
            {quadrantArray[3].content.map((paragraph, index) => {
                return <p className="post-information" key={index}>{paragraph}</p>
            })}
        </div>
    )
}
