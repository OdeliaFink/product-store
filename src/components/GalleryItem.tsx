import React from 'react';
import styled from 'styled-components';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescriptionCta = styled.a`
  margin-bottom: 0;
  font-size: 1.2rem;
  cursor: pointer;
  padding-left: 1rem;
  :hover {
    text-decoration: line;
    border: 1px solid grey;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
`;

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  image,
  description,
  price,
}) => {
  return (
    <GridItem>
      <Image src={image} />
      <DescriptionCta>{description}</DescriptionCta>
    </GridItem>
  );
};

export default GalleryItem;
