<template>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
      right 
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>
<script>
  export default {
    data () {
      return {
    snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 5000,
        text: 'Hello, I\'m a snackbar'
      }
    }
}
</script>