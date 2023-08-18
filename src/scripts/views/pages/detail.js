import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import TemplateCreator from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteIdb from '../../data/favorite-idb';

const Detail = {
  async render() {
    return '<div class="pattern"></div>';
  },

  async afterRender() {
    // render bagian detail resto
    const mainElement = document.querySelector('.pattern').parentElement;
    const { id } = UrlParser.getSegments();
    const restaurant = await RestaurantSource.getDetailRestaurant(id);
    mainElement.innerHTML += TemplateCreator.createRestaurantDetailTemplate(restaurant);
    // render bagian testimoni resto

    const testimoniOverlay = document.querySelector('.testimoni-overlay');
    restaurant.customerReviews.forEach((review, index) => {
      if (index > 1) return;
      testimoniOverlay.innerHTML += TemplateCreator.createTestimoniCard(review);
    });

    // render like button
    LikeButtonInitiator.init({
      likeContainer: document.querySelector('#likeContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews,
        pictureId: restaurant.pictureId,
      },
      favoriteRestaurant: FavoriteIdb,
    });
  },
};

export default Detail;
