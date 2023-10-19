import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Layout } from './Layout';
import { getGalleryImages } from '../api/services';

export const App = () => {
  const [per_page, setPer_page] = useState(12);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(()=>{
    const didUpdate = async () => {
      if(query === "") return;
      try {
        setIsLoading(true);
        setError(null);
        const {hits, totalHits} = await getGalleryImages({ per_page, query, page });
        setTotalHits(totalHits);
        setImages(prevImages=>[...prevImages, ...hits]);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false);
      }
    };
    didUpdate();
  }, [query, page, per_page]);

  const getQuery = query => {
    setPage(1);
    setQuery(query);
    setImages([]);
  };

  const changePage = () => {
    setPage(prevPage=>prevPage + 1)
  };

  const showBtnLoadMore = Math.ceil(totalHits / per_page) > page;

  return (
    <Layout>
      <Searchbar onSubmit={getQuery} />
      {error && <b>Something went wrong! Try to reload the page!</b>}
      {images.length > 0 && <ImageGallery images={images} />}

      {isLoading && <Loader />}
      {showBtnLoadMore > 0 && images.length > 0 && <Button onClick={changePage} />}
    </Layout>
  );
}
