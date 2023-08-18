import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async nowAvailable() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTAURANT);
    const { restaurants } = await response.json();
    return restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    // const { restaurant } = await response.json();
    // return restaurant;
    const result = await response.json();
    return result.restaurant;
  }

  static async findRestaurant(name) {
    const response = await fetch(API_ENDPOINT.FIND_RESTAURANT_BY_NAME(name));
    const { restaurants } = await response.json();
    return restaurants;
  }
}

export default RestaurantSource;
