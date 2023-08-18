import FavoriteIdb from '../src/scripts/data/favorite-idb';
import * as testFactories from './helpers/testFactories';

describe('Liking Resto', () => {
  const createLikeContainer = () => {
    document.body.innerHTML = '<span id="likeContainer"></span>';
  };

  beforeEach(() => {
    createLikeContainer();
  });

  it('should display like button when resto has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not display unlike button when resto has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be ABLE to like resto', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should NOT add resto when its ALREADY LIKED', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    FavoriteIdb.putRestaurant({ id: 1 });
    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    await FavoriteIdb.deleteRestaurant(1);
  });

  it('should NOT add resto where has NO ID', async () => {
    await testFactories.createLikeButtonPresenterWithResto({});
    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
  });
});
