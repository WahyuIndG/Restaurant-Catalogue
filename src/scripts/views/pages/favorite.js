import FavoriteIdb from '../../data/favorite-idb';
import TemplateCreator from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <style>
      body {
        min-height: 100vh;
        justify-content: space-between;
      }
    </style>
    
    <div class="pattern"></div>
    <div class="container">
      <div id="mainContent">
        <div class="heading"> 
          <h2>YOUR <span>FAVORITE</span> RESTAURANTS</h2>
        </div>
      </div>

      <div class="posts"> </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteIdb.getAllRestaurant();
    // console.log(restaurants);

    if (restaurants.length === 0) {
      const heading = document.querySelector('.heading');
      heading.innerHTML += TemplateCreator.createEmptySauce();
    }

    const posts = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      posts.innerHTML += TemplateCreator.createRestaurantPostTemplate(restaurant);
    });
  },
};

export default Favorite;
