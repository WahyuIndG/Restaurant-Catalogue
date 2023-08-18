import FavoriteIdb from '../src/scripts/data/favorite-idb';
import * as testFactories from './helpers/testFactories';

describe('Unliking Resto', () => {
  const createLikeContainer = () => {
    document.body.innerHTML = '<span id="likeContainer"></span>';
  };

  beforeEach(() => {
    createLikeContainer();
    FavoriteIdb.putRestaurant({ id: 1 });
  });

  afterEach(() => {
    FavoriteIdb.deleteRestaurant(1);
  });

  it('should display unlike button when resto has been liked', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like button when resto has been liked', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove resto from the list', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.getElementById('likedButton').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await FavoriteIdb.deleteRestaurant(1);
    document.getElementById('likedButton').dispatchEvent(new Event('click'));
    expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
  });
});
