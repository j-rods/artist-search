import axios from 'axios';

export default function ({ params, store }) {
  return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      store.commit('albums/ADD_ALBUM', response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}
