<template>
<v-container fluid>
<v-layout  row wrap>
<v-flex xs8 pr-1>
    

<v-flex xs12 pb-1 v-for="house in houses" :key="house.id" > 

    <v-card
    flat
    tile
    class="transparent">
        
            <v-jumbotron 
            class="hover"
            :src="house.url"
                dark
                height="200px"
                router
                 @click.native="onLoadHouse(house.id)"
                 >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <v-btn router small dark color="error" @click.native="onLoadHouse(house.id)">{{house.type}}</v-btn> 
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-jumbotron>
        
        <v-card-title>
            <v-card-text>
                {{house.title}}
            </v-card-text>
        </v-card-title>
<v-card-actions>
            <v-btn flat><i class="fas fa-bath"></i>  {{house.bathrooms }}</v-btn><br/>
            <v-btn flat><i class="fas fa-bed"></i> {{house.bedrooms}}</v-btn><br/>
            <v-btn flat><i class="fas fa-expand"></i> {{house.squarefeet}}</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
            <v-btn flat small outline color="primary">Shortlist</v-btn>
        </v-card-actions>



            <v-btn flat><v-icon medium color="red darken-1">place</v-icon> {{house.location}}</v-btn>
            <v-btn flat><v-icon medium color="red darken-1">attach_money</v-icon> {{ formatPrice(house.price)}}</v-btn>

    </v-card>
            


</v-flex>
</v-flex>

<!--SECOND FLEX-->
<v-flex xs4>

  <v-card 
  class="hidden-xs-only"
   style="background-color: rgba(48,48,48 ,.95);"
    flat
    dark 
    tile
    fixed
  >
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">Search for Properties:</h1>
      </div>
    </v-card-title>
    <v-card-actions>
    <v-layout row wrap>
      <v-layout row wrap>
        <v-flex xs12 >
          <v-text-field
            label="Keyword"
            placeholder="Any"
            outline
          ></v-text-field>
          <v-text-field
            label="Property Status"
            placeholder="Any"
            outline
          ></v-text-field>
          <v-text-field
            label="Property Type"
            placeholder="Any"
            outline
          ></v-text-field>
          <v-text-field
            label="Location"
            placeholder="Any"
            outline
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
            <v-btn flat block color="primary">MORE <v-icon small color="white">keyboard_arrow_down</v-icon></v-btn>          
        </v-flex>
        <v-flex xs12>
            <v-btn flat block color="primary">SEARCH <v-icon small color="white">search</v-icon></v-btn>
            
        </v-flex>
      </v-layout>
    </v-layout>
    </v-card-actions>
  </v-card>

</v-flex>
<!--SECOND FLEX END-->

  </v-layout>
  </v-container>
</template>
<script>
    export default {

        computed: {
            houses() {
                return this.$store.getters.houseInfos
            },

        },
        methods: {
            onLoadHouse (id) {
                this.$router.push('/property/' + id)
            },
            formatPrice(value) {
            let val = (value/1).toFixed(2).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        }
    }


    /*    <v-flex text-xs-center>
      <v-card v-for="house in houses" :key="house.id">
          <v-card-media
              class="red--text"
              :src="house.url"
              height="700px">
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

    */
</script>
<style lang="scss">
    .fa-bath, .fa-expand, .fa-bed {
        color: red;
    }
</style>