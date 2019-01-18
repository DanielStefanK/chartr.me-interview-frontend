<template>
  <v-text-field
    ref="input"
    class="marginBottom"
    v-model="message"
    :append-icon="'fa-comment'"
    :disabled="disabled"
    box
    label="Message"
    type="text"
    @keyup.enter="sendMessage"
    @click:append="sendMessage"
  />
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },
  data() {
    return {
      message: '',
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
    sendMessage() {
      this.$emit('send', this.message);
      this.message = '';
    },
  },
};
</script>

<style scoped>
.marginBottom {
  margin-bottom: -30px;
}
</style>
