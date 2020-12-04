import React from 'react'
import postSectionArray from "../config/PostSectionArrayConfig"

export default function AboutMe() {
    return (
        <>
            <h2 className="post-title" >{postSectionArray[0].title}</h2>
            {postSectionArray[0].content.map((paragraph, index) => {
                return <p className="post-information" key={index}>{paragraph}</p>
            })}
        </>
    )
}
