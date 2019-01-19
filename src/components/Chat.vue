<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">{{meta.name}}</v-toolbar-title>
      <v-spacer/>
      <v-tooltip bottom>
        <v-icon slot="activator" class="white--text">fa-question-circle</v-icon>
        <span>This is a Interview from {{meta.company.name}}</span>
      </v-tooltip>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12>
        <conversation :messages="messages" :loading="isLoading"/>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <message-input @send="onSendMessage" :disabled="disabled"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import MessageInput from './MessageInput';
import Conversation from './Conversation';

import startMixin from '@/mixins/startMixin';

export default {
  props: {
    meta: Object,
    accepted: Boolean,
  },
  mixins: [startMixin],

  components: {
    MessageInput,
    Conversation,
  },
  data() {
    return {
      disabled: true,
      isLoading: false,
      initalPhase: true,
      messages: [],
      name: '',
      email: '',
    };
  },
  watch: {
    accepted() {
      this.onStart();
    },
  },
  methods: {
    onSendMessage(message) {
      let cb;
      if (
        this.messages.length > 0 &&
        !!this.messages[this.messages.length - 1].cb
      ) {
        cb = this.messages[this.messages.length - 1].cb;
      }

      this.messages.push({
        content: message,
        own: true,
        key:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
      });

      if (!this.initalPhase) {
        this.handleSend(message);
      }

      if (cb) {
        cb(message);
      }
    },
  },
};
</script>
