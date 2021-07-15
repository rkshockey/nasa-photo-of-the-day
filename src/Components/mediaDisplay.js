import React from 'react'
import { scifi_url } from '../constants'

function MediaDisplay (props) {
    const { type, url } = props

    if (type === `image`){
        return (
            <img src={url} alt='Astronomy picture from NASA' />
        )
    }else if (type === `video`) {
        console.log(url)
        return(
            <div className="video">
                <video controls="controls">
                    <source src={url} />
                    Your browser does not support the video tag.
                </video>
                <p>Video not working? Go <a href={url}>here</a></p>
            </div>
        )
    }else{
        return (
            <img src={scifi_url} />
        )
    }
}

export default MediaDisplay