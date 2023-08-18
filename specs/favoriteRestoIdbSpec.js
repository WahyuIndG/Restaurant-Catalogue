import FavoriteIdb from '../src/scripts/data/favorite-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteIdb.getAllRestaurant()).forEach(async (movie) => {
      await FavoriteIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteIdb);
});
