import React from 'react'
import { quadrantArray } from "../config/QuadrantArrayConfig"

export default function AboutMe() {
    return (
        <div 
            className="expanded-quadrant"
            id={quadrantArray[0].title}
        >
            <h2 className="post-title" >{quadrantArray[0].title}</h2>
            {quadrantArray[0].content.map((paragraph, index) => {
                return <p className="post-information" key={index}>{paragraph}</p>
            })}
        </div>
    )
}
