<template>
  <div>
    <h1>Results for {{ $route.params.id }}</h1>
    <div v-if="albumExists">
      {{ albumData }}
    </div>
    <div v-else>
      <v-alert text outlined color="deep-orange" type="warning">
        <h2>Artist not found, try again.</h2>
      </v-alert>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    albumExists () {
      return this.albumData.length > 0;
    }
  },
  asyncData ({ params }) {
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
          return { albumData: response.data.results };
        })
        .catch((error) => {
          console.log(error);
        });
  },
  middleware: 'search'
};
</script>

<style>
</style>
