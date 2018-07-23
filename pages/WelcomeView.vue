<template>
<v-layout row wrap>
  


<!--TOP SECTION-->
  <v-parallax
    light
    src="/static/topbg.jpg" 
  >
  <v-layout align-center row wrap pb-2 dark>
<!--FIRST FLEX-->
<v-flex xs8>

  <v-card
  class="transparent"
  flat
  height=500
  dark
  >
  <v-container fluid>
    <v-layout row wrap>
      
    
  
    <v-card-title primary-title>
      <div>
        <div class="headline">Making the Dream of Home Real</div>
        <span class="red--grey">There is nothing more powerful or moThere is nothing more powerful or moThere is nothing more powerfulThere is nothing more powerful or moThere is nothing more powerful or moThere is nothing more powerful or mo or moThere is nothing more powerful or more important than home. That’s why we help people find the house of their dreams or successfully sell their home.</span>
      </div>
    </v-card-title>
    <v-card-actions>

    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="show">
        hidden text
      </v-card-text>
    </v-slide-y-transition>
    </v-layout>
    </v-container>
  </v-card>
</v-flex>
<!--FIRST FLEX END-->

<!--SECOND FLEX-->
<v-flex xs4>
<v-container fluid>
  <v-card 
  class="hidden-sm-and-down"
   style="background-color: rgba(48,48,48 ,.95);"
    flat
    height=500
    dark
  >
    <v-card-title primary-title>
      <div>
        <h1 class="headline mb-0">Search for Properties:</h1>
      </div>
    </v-card-title>
    <v-card-actions>
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
          <v-autocomplete
            :items="items"
            readonly
            label="Property Type"
            placeholder="Any"
            outline
          ></v-autocomplete>
          <v-text-field
            label="Location"
            placeholder="Any"
            outline
          ></v-text-field>
          <v-flex xs12>         
            <v-btn flat block color="primary">MORE <v-icon small color="white">keyboard_arrow_down</v-icon></v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn flat block color="primary">Search</v-btn>
          </v-flex>
      </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
  </v-container>
</v-flex>
<!--SECOND FLEX END-->

  </v-layout>
</v-parallax>
<!--TOP SECTION END-->


<!--SECOND SECTION-->
<v-layout row wrap>
    <!--store-->
<v-flex xs6 v-for="house in houses" :key="house.id" >
  
<v-card
   style="background-color: rgba(48,48,48 ,.95);"
    flat
    

>
<v-jumbotron 
class="hover"
:gradient="gradient"
:src="house.url"
    dark
    contain>
    <v-container grid-list-xs>
      
   
      <v-layout row wrap>
        <v-flex xs12 >
             <v-card-actions>
                <v-btn  small dark color="error" @click.native="onLoadHouse(house.id)">{{house.title}}</v-btn>
              </v-card-actions>
        </v-flex>
        
        <v-flex xs12 >
             <v-card-actions>
                <v-btn  Large outline dark >Listen now</v-btn>
              </v-card-actions>
        </v-flex>
        </v-layout>
 </v-container>

 </v-jumbotron>
  
</v-card>


  </v-flex>
    <!--store end-->


<v-flex xs12>
  

      <v-carousel >
    <v-carousel-item
      v-for="house in houses"
      :key="house.url"
      :src="house.url"
      
    ><v-btn flat color="primary" @click.native='onLoadHouse(house.id)'>{{house.id}}</v-btn></v-carousel-item>
  </v-carousel>
  </v-flex>
  
</v-layout>
<!--SECOND SECTION END-->
<v-flex xs12>
 <v-card v-for="parish in parishes" :key="parish.id">
  <v-card-media src="src" height="200px">
  </v-card-media>
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{parish.id}}</h3>
      <div>description</div>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn flat color="primary">text</v-btn>
    <v-btn flat color="primary">text</v-btn>
  </v-card-actions>
</v-card>
</v-flex>
</v-layout>
</template>
<script>
    export default {
data () {
  return{
    show : null,
    items: [
          'Buy',
          'Sell',
          'Rent',
        ],
    gradient: '0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0.7) 20%, rgba(255,255,255,0) 45%',
  }
},
        computed: {
            houses() {
                return this.$store.getters.houseInfos
            },
            parishs() {
                return this.$store.getters.parishesSort
            }
        },
        methods: {
            onLoadHouse (id) {
                this.$router.push('/property/' + id)
            }
        }
    }
</script>
<style lang="scss" scoped>
  .hover:hover {
  opacity: 1;
  transition: opacity .5s;
}

.hover {
  opacity: 1;
  transition: opacity 3s;
}
</style>