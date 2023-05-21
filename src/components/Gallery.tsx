import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Gallery = () => {
  return (
    <div style={{}}>
      <div style={{ paddingLeft: '4rem', paddingTop: '2rem' }}>
        <h2 style={{ fontWeight: '400' }}>TRENDING NOW</h2>
      </div>
      <GridContainer>
        <div>
          <GalleryItem
            image="https://aritzia.scene7.com/is/image/Aritzia/s23_03_a03_90873_30185_on_b?wid=600"
            title="Product 1"
            description="sweatsuits"
            price="$19.99"
          />
        </div>
        <div>
          <GalleryItem
            image="https://aritzia.scene7.com/is/image/Aritzia/s23_99_n03_109880_30901_on_b?wid=600"
            title="Product 2"
            description="vacation ready"
            price="$24.99"
          />
        </div>
        <div>
          <GalleryItem
            image="https://aritzia.scene7.com/is/image/Aritzia/s23_01_a08_107757_19170_on_c?wid=600"
            title="Product 3"
            description="dresses"
            price="$29.99"
          />
        </div>
        <div>
          <GalleryItem
            image="https://aritzia.scene7.com/is/image/Aritzia/s23_01_a01_97284_30252_on_a?wid=600"
            title="Product 3"
            description="swimwear"
            price="$29.99"
          />
        </div>
      </GridContainer>
    </div>
  );
};

export default Gallery;
