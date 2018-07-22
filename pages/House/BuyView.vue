<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-card v-for="house in houses" :key="house.id" >
            <v-card-media
              class="red--text"
              :src="house.url" 
              height="200px"
            >
              <v-container fill-height fluid>
                  <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                          <span class="headline">{{house.title}}</span>
                      </v-flex>
                  </v-layout>
              </v-container>
          </v-card-media>
          <v-card-title>
              <div>
                  <span class="red--text">{{house.id}}</span><br>
                  <span>text</span><br>
                  <span>description</span>
              </div>
          </v-card-title>
          <v-card-actions>
              <v-btn flat color="primary" :to="'/house/' + house.id" >text</v-btn>
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
    export default {

        computed: {
            houses() {
                return this.$store.getters.houseInfos
            }
        },
        methods: {
            onLoadHouse (id) {
                this.router.push('/house/' + id)
            }
        }
    }
</script>