import React from 'react';
import styled from 'styled-components';

function BackgroundImage(props) {
    const Banner = styled.div`
    background: url(${props.image});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    height:350px;
    opacity:0.8;
    position:relative;
    `;
    const Text = styled.p`
    position:absolute;
    color: ${props.color||"white"};
    font-size:2.5rem;
    bottom: 4rem;
    left:10rem;
    `;
    return (
        <Banner>
            <Text>{props.text}</Text>
        </Banner>
    )
}

export default BackgroundImage;
