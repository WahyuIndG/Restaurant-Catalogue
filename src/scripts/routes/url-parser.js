const UrlParser = {
  getPath() {
    const path = window.location.hash.slice(1).toLowerCase(); // /detail/12321
    const { resource, id, verb } = this._splitter(path);
    const result = (resource ? `/${resource}` : '/') + (id ? '/:id' : '') + (verb ? `/${verb}` : '');
    return result;
  },

  getSegments() {
    const path = window.location.hash.slice(1).toLocaleLowerCase();
    return this._splitter(path);
  },

  _splitter(path) {
    const splittedPath = path.split('/');

    return {
      resource: splittedPath[1] || null,
      id: splittedPath[2] || null,
      verb: splittedPath[3] || null,
    };
  },
};

export default UrlParser;
