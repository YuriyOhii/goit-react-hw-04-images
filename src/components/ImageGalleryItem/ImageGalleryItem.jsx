import { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const handleImageClick = () => setIsModalOpen(true);

  return (
    <>
      <Image onClick={handleImageClick} src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal bigImage={largeImageURL} tag={tags} onClick={closeModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
