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
        <Title title="Collection" mb={34} />
        <ParagraphStyled>Select A Category</ParagraphStyled>
      </PaddingStyled>
      <ListStyled>
        {
          <ImageStyled
            style={{ backgroundImage: `url(${image})` }}
            className="image"
          />
        }
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
  width: 52%;
  height: 124%;
  top: -44px;
  transform: translateX(520px);
  border-radius: 30px;
  z-index: 10;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  /* transform: translateY(100px); */
`;

const WrapperStyled = styled.div`
  margin-bottom: 210px;
`;
const PaddingStyled = styled.div`
  padding: 0 60px;
  font-family: PT Root UI;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 24px;
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
  line-height: 66px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 76px;

  &:last-child {
    border-bottom: 1px solid #fff;
  }
  &:hover {
    color: #000;
    background-color: #f9c202;
  }
`;

export default Collection;
