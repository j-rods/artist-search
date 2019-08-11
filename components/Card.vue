<template>
  <v-card max-width="400" class="mx-auto">
    <v-container class="pa-2" fluid grid-list-md>
      <v-layout column>
        <v-flex>
          <v-card
            target="_blank"
            :href="url"
            :color="color"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content
                class="align-self-start"
                :style="{
                  'align-items':'left'
                }">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="title"
                />
                <v-list-item-subtitle align-start v-text="artistName"/>
              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="image"/>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'image', 'artistName', 'url', 'color']
};
</script>

<style>
.v-list-item__title , .v-list-item__subtitle {
  text-align:left;
}
</style>
