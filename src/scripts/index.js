import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  drawer: document.querySelector('#drawer'),
  hamburgerButton: document.querySelector('#stack-menu'),
  navLinkButtons: document.querySelectorAll('#drawer li a'),
  mainElement: document.querySelector('main'),
});

const skipLink = document.querySelector('.skip-button');

// skip button
skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  document.querySelector('.loader-container').style.display = 'none';
  app.renderPage();
  swRegister();
});
