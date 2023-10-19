import React from 'react';
import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(el => (
        <GalleryItem key={el.id}>
          <ImageGalleryItem image={el} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  imsges: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
