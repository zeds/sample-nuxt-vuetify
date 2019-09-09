<template>
<v-container class="grey lighten-5">
    <v-row>
        <v-col
            v-for="(item,n) in dog_list"
            :key="n"
            cols="12"
            sm="4"
        >
<v-card
    class="mx-auto"
    max-width="344"
    min-width="400"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">DOG</v-list-item-title>
        <v-list-item-subtitle>{{item.url}}</v-list-item-subtitle>
      </v-list-item-content>


      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <v-img
          :src="item.url"
      ></v-img>
          


      </v-list-item-avatar>
    </v-list-item>


    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
</v-container>
</template>

<script>
  import dogApi from '@/api/dog'
  import {mapState} from 'vuex'

  export default {
	  async fetch({store, params}) {
	      const json = await dogApi.dogs(params.breed);
	      store.commit('dog_list_update', json)
	  },
	  computed: mapState(['dog_list']),
  }
</script>
