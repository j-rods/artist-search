const state = {
  albums: []
};

const mutations = {
  ADD_ALBUM (state, payload) {
    state.albums = payload;
  }
}

export default {
  namespaced: true,
  state
};
