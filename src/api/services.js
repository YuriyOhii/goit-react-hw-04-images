import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=37868364-ee4dbef8cb4e94ed0f02125ab&image_type=photo&orientation=horizontal';

export const getGalleryImages = async ({ per_page, query, page }) => {
  const r = await axios.get(`&q=${query}&per_page=${per_page}&page=${page}`);
  return r.data;
};
