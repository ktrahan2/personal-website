import React from 'react'
import { pictures } from '../config/PictureConfig'

export default function CurrentPicture({ isCurrentPicture }) {
    return (
        <div id='picture-container'>
            <img id="current-picture" src={pictures[isCurrentPicture].url} alt={pictures[isCurrentPicture].altTag}/>
            <p>{pictures[isCurrentPicture].description}</p>
        </div>
    )
}
