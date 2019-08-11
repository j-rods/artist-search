<template>
	<v-card max-width="auto" class="mx-auto">
		<v-container
      class="pa-2"
      fluid
      grid-list-md
    >
      <v-layout column>
        <v-flex>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Unlimited music now</div>
              Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            :color="item.color"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                ></v-list-item-title>

                <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
