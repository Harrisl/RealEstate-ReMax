<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;Oh No, 404!&#8221;
        <footer>
          <small>
            <em>Page you were looking for does not exist</em><br/>
            <v-btn color="blue" to='/' outline ><em> Back to Home</em></v-btn>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>