<template>
  <v-card :color="message.own ? 'white' : 'accent'" mt-0>
    <p class="text-xs-left px-2 py-1">{{message.content}}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    message: Object,
  },
};
</script>
