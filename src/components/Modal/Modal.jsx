import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';
export class Modal extends PureComponent {

  static propTypes = {
    bigImage: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClose);
  }

  onEscClose = e => {
    if (e.code === 'Escape') this.props.onClick();
  };

  handleClick = e => {
    if (e.target === e.currentTarget) this.props.onClick();
  };
  render()  {
    const { bigImage, tag } = this.props
  return (
    <Overlay onClick={this.handleClick}>
      <ModalW>
        <img src={bigImage} alt={tag} />
      </ModalW>
    </Overlay>
  );
}
}

 
