import React from 'react';
import { CardContainer, CardContent, CardText } from './GalleryElements';

export const Card = ({ children: text, alignment, img }) => (
    <CardContainer>
        <CardContent alignment={alignment} img={img}>
            <CardText>
                <h1>{text}</h1>
            </CardText>
        </CardContent>
    </CardContainer>
);

export default Card;