import TemplateCreator from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeContainer, restaurant, favoriteRestaurant }) {
    this._likeContainer = likeContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeContainer.innerHTML = TemplateCreator.createLikeButton();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeContainer.innerHTML = TemplateCreator.createLikedButton();
    const likedButoton = document.querySelector('#likedButton');
    likedButoton.addEventListener('click', async (event) => {
      event.stopPropagation();
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
