<template>
  <v-card
    flat
    :min-height="windowHeight < 600 ? '' : '450'"
    max-height="450"
    class="scroll"
    ref="connversation"
    id="container"
  >
    <transition-group name="list" tag="p">
      <v-layout row v-for="msg in messages" :key="msg.key" ma-3 :justify-end="msg.own">
        <v-flex xs8 :id="msg.key">
          <message :message="msg"/>
        </v-flex>
      </v-layout>
      <v-layout v-if="end" key="end" pa-3>
        <v-flex>
          <v-alert :value="true" type="success">Thank you for paticipating in the Interview!</v-alert>
        </v-flex>
      </v-layout>
      <v-layout v-if="loading" key="loading" pa-3>
        <v-flex>
          <v-progress-circular indeterminate color="primary"/>
        </v-flex>
      </v-layout>
    </transition-group>
  </v-card>
</template>

<script>
import Message from './Message';

export default {
  props: {
    messages: Array,
    loading: Boolean,
    end: Boolean,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },

  components: {
    Message,
  },
  updated() {
    this.$nextTick(() => {
      var container = this.$el;
      container.scrollTop = container.scrollHeight;
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight;
      });
    });
  },
  watch: {
    messages() {},
  },
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
  scroll-behavior: smooth;
}
.list-item {
  display: inline-block;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.7s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
