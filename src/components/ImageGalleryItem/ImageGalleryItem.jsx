import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends PureComponent {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };
  state = {
    isModalOpen: false,
  };
 
  closeModal = () => this.setState({ isModalOpen: false });

  handleImageClick = () => this.setState({ isModalOpen: true });
  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <Image onClick={this.handleImageClick} src={webformatURL} alt={tags} />
        {isModalOpen && (
          <Modal
            bigImage={largeImageURL}
            tag={tags}
            onClick={this.closeModal}
          />
        )}
      </>
    );
  }
}
