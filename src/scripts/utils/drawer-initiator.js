const DrawerInitiator = {
  init({ drawer, hamburgerButton, navLinkButtons }) {
    hamburgerButton.addEventListener('click', (event) => {
      event.stopPropagation();
      hamburgerButton.classList.toggle('active');
      drawer.classList.toggle('active');
    });

    navLinkButtons.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        hamburgerButton.classList.remove('active');
        drawer.classList.remove('active');
      });
    });

    window.addEventListener('scroll', () => {
      const ruler = window.innerHeight * 0.1;
      if (document.body.scrollTop > ruler || document.documentElement.scrollTop > ruler) {
        document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,.7)';
      } else {
        document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0)';
      }
    });
  },
};

export default DrawerInitiator;
