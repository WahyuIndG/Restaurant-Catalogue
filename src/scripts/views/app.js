import Route from '../routes/route';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    drawer, hamburgerButton, navLinkButtons, mainElement,
  }) {
    this._drawer = drawer;
    this._hamburgerButton = hamburgerButton;
    this._navLinkButtons = navLinkButtons;
    this._mainElement = mainElement;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerButton: this._hamburgerButton,
      drawer: this._drawer,
      navLinkButtons: this._navLinkButtons,
    });
  }

  async renderPage() {
    const path = UrlParser.getPath();
    const page = Route[path];
    this._mainElement.innerHTML = await page.render();
    console.log('HERE IS :');
    console.log(document.querySelector('.tes'));
    await page.afterRender();
  }
}

export default App;
