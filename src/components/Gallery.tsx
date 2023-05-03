import React from 'react';
import styled from 'styled-components';

interface GalleryItemProps {
  title: string;
  description: string;
  price: string;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

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
      <img />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <AddToCartButton>Add to cart</AddToCartButton>
    </GridItem>
  );
};

const Gallery: React.FC = () => {
  return (
    <GridContainer>
      <div style={{ padding: '1rem' }}>
        <GalleryItem
          title="Product 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
          price="$19.99"
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <GalleryItem
          title="Product 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
          price="$24.99"
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <GalleryItem
          title="Product 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
          price="$29.99"
        />
      </div>
    </GridContainer>
  );
};

export default Gallery;
