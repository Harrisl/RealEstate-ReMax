<template>
  <v-app light v-scroll="onScroll" >
<!---LEFT NAV BAR-->
    <v-navigation-drawer v-if="$route.path != '/404'"
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-tile 
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in menu"
          exact
          ripple
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
          <!--LOADING-->
          <v-progress-linear
            :active="loading"
            class="ma-0"
            color="green lighten-3"
            height="4"
            indeterminate
          ></v-progress-linear>
          <!--LOADING-->
<!---TOP TOOLBAR-->

    <v-toolbar 
      fixed 
      app 
      flat
      dense
      style="background-color: rgba(0,0,0,.1);" 
      v-if="$route.path != '/404'"
      :dark="change(dark)"
    >
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn 
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      
      <v-toolbar-items 
        v-if="$route.path != '/house'"
        class="hidden-xs-only"
        v-for="(item, i) in tbmenu" 
        :key="i"
        ripple
      >
            <v-slide-y-transition mode="out-in">
      
      <v-btn 
      flat
      :to="item.to"
      >{{ item.title }}</v-btn>
      </v-slide-y-transition> 
      </v-toolbar-items>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-slide-y-transition mode="out-in">
        <v-btn flat v-if="$route.path === '/inspire'">Link Three</v-btn>
        </v-slide-y-transition>
      </v-toolbar-items>
      
      
      
      <v-btn
        icon
        @click.native.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>


<!---SECOND TOOLBAR-->
<v-content >
  <v-container fluid v-if="$route.path != '/404'">   
    <v-layout >
      
  <v-flex xs11>
    

      <v-toolbar 
        flat   
        class="transparent" 
      >
      <v-slide-y-transition mode="out-in">
      <v-toolbar-title v-if="$route.path === '/property' | $route.path === '/property/buy' | $route.path === '/property/sell' | $route.path === '/property/rent' ">Properties</v-toolbar-title>
        <v-toolbar-title v-else-if="$route.path != '/' ">{{ pageTitle }}</v-toolbar-title>
        
        <img v-if="$route.path === '/'" src="/static/REMAX.png" alt="ReMax" />
      </v-slide-y-transition> 
        <v-spacer></v-spacer>
        <v-toolbar-items> 
          <v-btn
                  flat 
                  small
                  to="/property"
          >
                  Home
          </v-btn>
          <v-menu
              transition="slide-x-transition"
              bottom
              lazy        
              offset-y
              :nudge-width="-50"
              offset-overflow
          >
              <v-btn
                  slot="activator"
                  flat 
                  small
              >
                  Menu1
                <v-icon small color="white">keyboard_arrow_down</v-icon>
              </v-btn>
              <v-list>
              
                  <v-list-tile
                  router
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  >
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-divider></v-divider>
                  </v-list-tile>  
              </v-list>
            </v-menu>
              
          <v-menu
              transition="slide-x-transition"
              bottom
              lazy    
              offset-y
              :nudge-width="-50"
              offset-overflow
          >
              <v-btn
                  slot="activator"
                  flat 
                  small
              >
                  Slide X Transition
                <v-icon small color="white">keyboard_arrow_down</v-icon>
              </v-btn>
              <v-list>
                  <v-list-tile
                  router
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  >
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-divider></v-divider>
                  </v-list-tile>  
              </v-list>
            </v-menu>

        </v-toolbar-items>
      </v-toolbar>
      </v-flex>
      <v-layout align-end justify-end column class="hidden-xs-only">
      <v-flex xs1>     
          <v-text-field
              prepend-icon="phone"
              value="876-953-9000"
              label="Call us"
              readonly
          ></v-text-field>
      </v-flex>
    </v-layout>
    </v-layout>
  </v-container>
</v-content>
   
<!---ROUTING-->
 

        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>

    
<!---RIGHT NAV BAR-->
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawder (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

<!---FOOTER-->
    <v-footer fixed >
      <em>RelinkT Copyright: &copy; 2018. All rights reserved.	</em>
    </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'
  import { mapState } from 'vuex'
  import SnackBar from '../components/SnackBar.vue'

  export default {
    mixins: [Meta],
    
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        dark: false,
        loading: false,

        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'contacts', title: 'About', to: '/about' },
          { icon: 'home', title: 'Buy', to: '/house/buy' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        offsetTop: 0
        
      }
    },
    computed: {
    ...mapState(['tbmenu','menu', 'pageTitle'])
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      },
      change (dark) {
        if (this.offsetTop >= 50)
        {
          return dark = true
        }
        else
        {
          return dark = false
        }
      },

      }
  }
</script>
