<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-progress-linear v-if="timeQuestion" v-model="time"/>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        ref="input"
        class="marginBottom"
        v-model="message"
        :append-icon="'fa-comment'"
        :disabled="disabled"
        box
        label="Message"
        type="text"
        @keyup.enter="sendMessage()"
        @click:append="sendMessage()"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
  data() {
    return {
      message: '',
      timeQuestion: false,
      time: 100,
      int: null,
      disInt: null,
    };
  },

  updated() {
    this.$nextTick(() => {
      if (!this.disabled) {
        this.$refs.input.focus();
      }
    });
  },

  methods: {
    sendMessage(noCheck = false) {
      if (noCheck || this.message !== '') {
        this.clear();
        this.$emit('send', this.message);
        this.message = '';
      }
    },
    newQuestion(q) {
      if (q.time) {
        this.time = 100;
        let time = q.time;
        this.timeQuestion = true;
        this.int = setInterval(() => {
          this.time -= 100 / (time * 10);
          if (this.time < 0) {
            clearInterval(this.int);
            this.timeQuestion = false;
            this.time = 0;
            this.sendMessage(true);
          }
        }, 100);
      }

      if (q.distraction) {
        this.disInt = setInterval(() => {
          var myWindow = window.open(
            '',
            'Distraction' +
              '_' +
              Math.random()
                .toString(36)
                .substr(2, 9),
            'top=' +
              Math.random() * 1000 +
              ',left=' +
              Math.random() * 500 +
              'width=200,height=100',
          );
          myWindow.document.write('<p>This is a distraction.</p>');
        }, 30000 / q.distraction);
      }
    },
    clear() {
      clearInterval(this.int);
      clearInterval(this.disInt);
      this.timeQuestion = false;
      this.time = 0;
    },
  },
};
</script>

<style scoped>
.marginBottom {
  margin-bottom: -30px;
}
</style>
