import React, { Suspense } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Gallery = () => {
  const GalleryItem = React.lazy(() => import('./GalleryItem'));

  return (
    <GridContainer>
      <div style={{ padding: '1rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryItem
            title="Product 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
            price="$19.99"
          />
        </Suspense>
      </div>
      <div style={{ padding: '1rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryItem
            title="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
            price="$24.99"
          />
        </Suspense>
      </div>
      <div style={{ padding: '1rem' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryItem
            title="Product 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod mauris et urna suscipit, eget rhoncus mi aliquam."
            price="$29.99"
          />
        </Suspense>
      </div>
    </GridContainer>
  );
};

export default Gallery;
