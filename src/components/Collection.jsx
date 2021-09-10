import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { collection } from '../data';

const Collection = () => {
  const [image, setImage] = useState('');

  const onMouseEnter = (e, image) => {
    setImage(image);
  };
  const onMouseOut = () => {
    setImage('');
  };

  return (
    <WrapperStyled>
      <PaddingStyled>
        <Title title="Collection" />
        <ParagraphStyled>Select Category</ParagraphStyled>
      </PaddingStyled>
      <ListStyled>
        {image && (
          <ImageStyled
            style={{ backgroundImage: `url(${image})` }}
            className="image"
          />
        )}
        {collection.map((item, index) => (
          <ItemStyled
            image={image}
            key={index}
            onMouseEnter={(e) => onMouseEnter(e, item.image)}
            onMouseOut={() => onMouseOut()}
            className="item"
          >
            {item.name}
          </ItemStyled>
        ))}
      </ListStyled>
    </WrapperStyled>
  );
};

const ImageStyled = styled.div`
  position: absolute;
  width: 40%;
  height: 110%;
  top: -30px;
  transform: translateX(700px);
  border-radius: 30px;
  z-index: 10;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  /* transform: translateY(100px); */
`;

const WrapperStyled = styled.div`
  margin-bottom: 200px;
`;
const PaddingStyled = styled.div`
  padding: 0 60px;
  font-family: PT Root UI;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
const ParagraphStyled = styled.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const ListStyled = styled.ul`
  position: relative;
`;
const ItemStyled = styled.li`
  padding: 0 60px;
  border-top: 1px solid #fff;
  font-family: 'Gosha Sans', sans-serif;
  font-size: 55px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:last-child {
    border-bottom: 1px solid #fff;
  }
  &:hover {
    color: #000;
    background-color: #f9c202;
  }
`;

export default Collection;
