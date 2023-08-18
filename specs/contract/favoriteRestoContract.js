/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteRestoModel = (favoriteRestaruant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaruant.putRestaurant({ id: 1 });
    favoriteRestaruant.putRestaurant({ id: 2 });

    expect(await favoriteRestaruant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaruant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaruant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaruant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaruant.getAllRestaurant())
      .toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteRestaruant.putRestaurant({ id: 1 });
    favoriteRestaruant.putRestaurant({ id: 2 });

    expect(await favoriteRestaruant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaruant.putRestaurant({ id: 1 });
    favoriteRestaruant.putRestaurant({ id: 2 });
    favoriteRestaruant.putRestaurant({ id: 3 });

    await favoriteRestaruant.deleteRestaurant(1);

    expect(await favoriteRestaruant.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the movie has not been added', async () => {
    favoriteRestaruant.putRestaurant({ id: 1 });
    favoriteRestaruant.putRestaurant({ id: 2 });
    favoriteRestaruant.putRestaurant({ id: 3 });

    await favoriteRestaruant.deleteRestaurant(4);

    expect(await favoriteRestaruant.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
