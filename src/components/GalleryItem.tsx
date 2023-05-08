import React from 'react';
import styled from 'styled-components';

interface GalleryItemProps {
  title: string;
  description: string;
  price: string;
}

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const Price = styled.p`
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  margin-top: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <GridItem>
      <img alt="gallery-item" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <AddToCartButton>Add to cart</AddToCartButton>
    </GridItem>
  );
};

export default GalleryItem;
