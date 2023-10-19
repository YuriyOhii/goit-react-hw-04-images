import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export const Modal = ({ bigImage, tag, onClick }) => {
  const onEscClose = e => {
    if (e.code === 'Escape') onClick();
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) onClick();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  });

  return (
    <Overlay onClick={handleClick}>
      <ModalW>
        <img src={bigImage} alt={tag} />
      </ModalW>
    </Overlay>
  );
};

Modal.propTypes = {
  bigImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
