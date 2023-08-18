/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteIdb from '../../src/scripts/data/favorite-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeContainer: document.getElementById('likeContainer'),
    restaurant,
    favoriteRestaurant: FavoriteIdb,
  });
};

export {
  createLikeButtonPresenterWithResto,
};
