import React from 'react'
import { scifi_url } from '../constants'
import styled from 'styled-components'

const StyledImg = styled.img`
    height: 60vh;
`
const StyledVid = styled.video`
    height: 60vh;
`

function MediaDisplay (props) {
    const { type, url } = props

    if (type === `image`){
        return (
            <StyledImg src={url} alt='Astronomy picture from NASA' />
        )
    }else if (type === `video`) {
        console.log(url)
        return(
            <div className="video">
                <StyledVid controls="controls">
                    <source src={url} />
                    Your browser does not support the video tag.
                </StyledVid>
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