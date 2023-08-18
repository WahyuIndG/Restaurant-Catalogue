import API_ENDPOINT from '../../globals/api-endpoint';

const TemplateCreator = {
  createRestaurantPostTemplate(restaurant) {
    return `
      <a class="post" href="/#/detail/${restaurant.id}" aria-label="Go to ${restaurant.name} Restaurant Page">
         <div class="post-image">
            <img crossorigin="anonymous" class="lazyload" data-src="${API_ENDPOINT.LG_RESTAURANT_IMAGE(restaurant.pictureId)}" alt="restaurant ${restaurant.name}" src="https://fakeimg.pl/350x250?text=hold+on">
         </div>
         <p>${restaurant.city}</p>
         <h3>${restaurant.name}</h3>
      </a>
      `;
  },

  createRestaurantDetailTemplate(restaurant) {
    const descriptionCut = restaurant.description.slice(0, 193);

    return `
    <style>
        body {
          background: rgb(217,217,217);
          background: linear-gradient(90deg, rgba(217,217,217,1) 59%, rgba(246,246,246,1) 77%);
        }
    </style>
    <div class="container-detail">
      <div class="detail-image">
        <img crossorigin="anonymous" class="lazyload" data-src="${restaurant.pictureId ? API_ENDPOINT.MD_RESTAURANT_IMAGE(restaurant.pictureId) : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Gambar Restaurant ${restaurant.name}" src="https://fakeimg.pl/350x250?text=hold+on">
      </div>
      <div class="detail-text">
        <h1>${restaurant.name}</h1>
        <h4>${restaurant.city} &ensp;|&ensp; ${restaurant.address}</h4>
        <p>${descriptionCut}</p>
        <span>Menu :</span>
        <div class="menu-container">
          <ul>
            <li>${restaurant.menus.foods[0].name}</li>
            <li>${restaurant.menus.foods[1].name}</li>
          </ul>
          <ul>
            <li>${restaurant.menus.drinks[0].name}</li>
            <li>${restaurant.menus.drinks[1].name}</li>
          </ul>
        </div>
        <span id="likeContainer"></span>
      </div>
    </div>
    <div class="testimoni" style="background-image: url('${API_ENDPOINT.MD_RESTAURANT_IMAGE(restaurant.pictureId)}');">
      <div class="testimoni-overlay">
        <div class="testimoni-title">
          <h2>Testimonial</h2>
          <span></span>
        </div>
      </div>
    </div>
      `;
  },
  // <button type="submit" id="like" title="add to favorite">LIKE</button>
  createTestimoniCard(review) {
    return `
      <div class="testimoni-card">
         <p>" ${review.review} "</p>
         <span>${review.name}</span>
      </div>
      `;
  },

  createLikeButton() {
    return `
      <button aria-label="like this restaurant" id="likeButton" class="like">
         <img src="images/icons/like.svg" alt="like icon svg" >
      </button>
      `;
  },

  createLikedButton() {
    return `
      <button aria-label="unlike this restaurant" id="likedButton" class="liked">
         <img src="images/icons/liked.svg" alt="liked  icon svg" >
      </button>
      `;
  },

  createEmptySauce() {
    return `
    <div class="empty-sauce">
      <img src="images/empty-favorite-page.png" alt="empty favorite card">
      <p>No favorite restaurant yet</p>
      <p>Let’s add your favorite restaurant !</p>
    </div>
    `;
  },
};

export default TemplateCreator;
