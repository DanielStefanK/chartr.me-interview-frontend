<template>
  <v-flex xs12 md6 lg4 xl3>
    <v-slide-y-transition mode="out-in">
      <template v-if="isLoading">
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate/>
      </template>
      <disclaimer :meta="meta" v-else-if="!isLoading && meta"/>
      <template v-else-if="error">
        <v-alert :value="true" type="error">{{errorMsg}}</v-alert>
      </template>
    </v-slide-y-transition>
  </v-flex>
</template>


<script>
import Disclaimer from '@/components/Disclaimer';

export default {
  components: {
    Disclaimer,
  },

  data() {
    return {
      isLoading: true,
      meta: null,
      error: false,
      errorMsg: 'not found',
    };
  },

  methods: {
    loadMetaData() {
      this.isLoading = true;
      setTimeout(() => {
        this.meta = {
          name: 'sample',
          company: 'sample Company',
        };
        this.isLoading = false;
      }, 3000);
    },
  },

  created() {
    this.loadMetaData();
  },
};
</script>
