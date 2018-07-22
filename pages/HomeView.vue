<template>
<v-card
    flat
    height="100vh"
    class="transparent"
>
    <v-toolbar 
        flat
        class="transparent"
    >
    
    <img src="/static/REMAX.png" alt="ReMax" />
    <v-spacer></v-spacer>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-toolbar-items>

    <v-menu
        transition="slide-x-transition"
        bottom
        lazy    
         offset-x
         offset-y
         :nudge-width="-50"
         offset-overflow
    >
        <v-btn
            slot="activator"
            dark
            flat 
            small
        >
            Slide X Transition
        <v-icon small color="white">keyboard_arrow_down</v-icon>
        </v-btn>

        <v-list>
            <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click=""
            >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-divider></v-divider>
            </v-list-tile>  
        </v-list>
    </v-menu>

        </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
      model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}  
</script>