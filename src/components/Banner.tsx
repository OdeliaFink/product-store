import React from 'react';

interface BannerProps {
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, ctaText, ctaLink }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '40rem', // you can adjust this height as per your requirement
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <a
        href={ctaLink}
        style={{
          backgroundColor: '#2ecc71',
          color: '#fff',
          padding: '15px 30px',
          borderRadius: '5px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          position: 'absolute',
          bottom: '20px',
        }}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default Banner;
