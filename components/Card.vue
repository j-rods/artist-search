<template>
  <v-card max-width="400" class="mx-auto">
    <v-container class="pa-2" fluid grid-list-md>
      <v-layout column>
        <v-flex>
          <v-card target="_blank" :href="url" :color="color" dark>
            <v-card-text class="white--text">
              <div class="headline mb-2">
                {{ title }}
              </div>
              {{ artistName }}
            </v-card-text>

            <v-list-item-avatar size="125" tile>
              <v-img :src="image" />
            </v-list-item-avatar>
          </v-card>
        </v-flex>

        <!-- <v-flex v-for="(item, i) in items" :key="i">
          <v-card :color="item.color" dark>
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title class="headline mb-2" v-text="item.title" />
                <v-list-item-subtitle v-text="item.artist" />
              </v-list-item-content>
              <v-list-item-avatar size="125" tile>
                <v-img :src="item.src" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex> -->
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
</style>
