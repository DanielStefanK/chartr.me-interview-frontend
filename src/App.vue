<template>
  <v-app>
    <v-container justify-center fill-height>
      <v-layout text-xs-center justify-center wrap align-center>
        <router-view/>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
