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

  gap: 1;
`;

const DescriptionCta = styled.a`
  margin-bottom: 0;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 50vh;
  height: 70vh;
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
