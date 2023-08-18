import CONFIG from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  FIND_RESTAURANT_BY_NAME: (name) => `${CONFIG.BASE_URL}/search?q=${name}`,
  GET_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SM_RESTAURANT_IMAGE: (pictureId) => `${CONFIG.BASE_URL}/images/small/${pictureId}`,
  MD_RESTAURANT_IMAGE: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  LG_RESTAURANT_IMAGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
