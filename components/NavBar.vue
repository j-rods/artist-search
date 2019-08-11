<template>
  <div>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon />
      <v-toolbar-title class="white--text">
        <nuxt-link class="title" to="/">
          Artist Search
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn to="/" icon class="white--text">
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  text-decoration: none !important;
}

.title:visited{
  color:white;
}
</style>
