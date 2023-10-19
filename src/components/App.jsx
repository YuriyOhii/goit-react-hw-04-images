import { PureComponent } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Layout } from './Layout';
import { getGalleryImages } from '../api/services';

export class App extends PureComponent {
  state = {
    per_page: 12,
    page: 1,
    query: '',
    images: [],
    error: null,
    isLoading: false,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { per_page, query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState(() => ({ isLoading: true, error: null }));
        const {hits, totalHits} = await getGalleryImages({ per_page, query, page });
        this.setState(state => ({ images: [...state.images, ...hits], totalHits }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getQuery = query => {
    this.setState({ query, images: [], page: 1  });
  };

  changePage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { images, isLoading, error, totalHits, per_page, page} = this.state;
    const showBtnLoadMore = Math.ceil(totalHits / per_page) > page
    return (
      <Layout>
        <Searchbar onSubmit={this.getQuery} />
        {error && <b>Something went wrong! Try to reload the page!</b>}
        {images.length > 0 && <ImageGallery images={images} />}

        {isLoading && <Loader />}
        {showBtnLoadMore > 0 && images.length > 0 && <Button onClick={this.changePage} />}
      </Layout>
    );
  }
}
