import RestaurantSource from '../../data/restaurant-source';
import TemplateCreator from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron-container">  
      <div class="jumbotron tes">         
        <picture>
          <source  media="(max-width: 600px)" srcset="images/heros/hero-small.webp">
          <source  media="(max-width: 600px)" srcset="images/heros/hero-small.jpg">
          <source  media="(max-width: 1300px)" srcset="images/heros/hero-large.webp">
          <source  media="(max-width: 1300px)" srcset="images/heros/hero-large.jpg">
          <img  src="images/heros/hero-large.jpg" alt="hero image">
        </picture>          
        <div class="overlay">                 
          <div class="jumbotron-content">   
            <h1>Those Who Dare Jump.</h1>
            <p>Sapiente nostrum eos & eum omnis voluptatem? Nihil vel eos & voluptatem id numquam iure, sunt non dignissimos quae voluptate sapiente saepe animi. Facilis, adipisci debitis.</p>
            <a type="submit" title="Learn More" href="#mainContent">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
      <div class="container">
        <div class="banner">
          <div class="banner-card">
            <i class="fa-brands fa-pagelines"></i>
            <h4>GOOD ENVIRONS</h4>
            <p>Nihil vel id numquam iure, sunt non di asdas id numquam iure, sunt</p>
          </div>
          <div class="banner-card">
            <i class="fa-solid fa-crown"></i>        
            <h4>PREMIUM</h4>
            <p>Nihil vel id numquam iure, sunt non di asdas id numquam iure, sunt</p>
          </div>
          <div class="banner-card">
            <i class="fa-solid fa-dollar-sign"></i>
            <h4>AFFORDABLE PRICE</h4>
            <p>Nihil vel id numquam iure, sunt non di asdas id numquam iure, sunt</p>
          </div>
        </div>
    
        <div id="mainContent">
          <div class="heading"> 
            <h2>SERVED IN <span>FRONT</span> OF YOU</h2>
            <P>Porem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit. <br>Sapiente nostrum eos eum omnis .</P>
            <form action="" class="search-area">
              <div class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input name="search-input" id="searchInput" type="text" placeholder="serach here ..." title="search restaurant">  
              </div>
              <button id="searchButton" type="submit" title="submit">enter</button>
            </form>
          </div>
    
          <div class="posts">
          
          </div>
        </div>
      </div>
   
      `;
  },

  async afterRender() {
    // mendapatkan semua resto dari API
    const availableResto = await RestaurantSource.nowAvailable();
    this._show(availableResto);

    const searchForm = document.querySelector('form.search-area');
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const searchValue = formData.get('search-input');
      const searchedResto = await RestaurantSource.findRestaurant(searchValue);
      this._show(searchedResto);
    });

    // efek agar searchbar lebih hidup
    const searchInput = document.getElementById('searchInput');

    searchInput.onfocus = (event) => {
      event.stopPropagation();
      document.getElementById('searchButton').style.marginLeft = '-3px';
    };
    searchInput.onblur = (event) => {
      event.stopPropagation();
      document.getElementById('searchButton').style.marginLeft = '-50px';
    };
  },

  _show(restaurants) {
    const postsElement = document.querySelector('.posts');
    postsElement.innerHTML = '';
    restaurants.forEach((restaurant) => {
      postsElement.innerHTML += TemplateCreator.createRestaurantPostTemplate(restaurant);
    });
  },
};

export default Home;
