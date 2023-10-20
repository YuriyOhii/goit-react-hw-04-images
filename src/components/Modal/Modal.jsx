import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export const Modal = ({ bigImage, tag, onClick }) => {
 
  const handleClick = e => {
    if (e.target === e.currentTarget) onClick();
  };

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') onClick();
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onClick]);

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
