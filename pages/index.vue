<template>
  <div>
    <h1>Search Albums</h1>
    <br></br>
    <v-form>
      <v-text-field v-model="search" placeholder="Search Artist" autofocus>
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      search: ''
    };
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
