<template>
  <div>
    <h1>Search Albums</h1>
    <br></br>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="searchItem" placeholder="Search Artist" autofocus />
    </v-form>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      searchItem: ''
    };
  },
  methods: {
    submit (event) {
      this.$router.push(`results/${this.searchItem}`);
    }
  }
};
</script>

<style>
* {
  text-align: center;
}

h1 {
  padding: 20px;
}
</style>
