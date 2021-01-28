import React from 'react';
import {GlobalStyle} from '../../globalStyles';
import { cards} from './Data';
import { Parallax} from './GalleryElements';
import { Card } from './Card';

  function Gallery (){
    <>
      <GlobalStyle />
      <Parallax>
        {cards.map((card, even) => (
          <Card alignment={even % 2 === 0 ? 'left' : 'right'} img={card.img}>
            {card.text}
          </Card>
        ))}
      </Parallax>
    </>
  };
  
  export default Gallery;

