import Vuex from 'vuex';
import albums from './modules/albums/albums';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      albums
    }
  });
};

export default createStore;
