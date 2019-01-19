<template>
  <v-flex xs12 md6 lg4>
    <v-card>
      <v-card-title primary-title>Enter a Chat ID</v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field v-model.trim="id" :append-icon="'fa-fingerprint'" label="ID" type="text"/>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="primary" @click="onSubmit">Send</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  },
  methods: {
    onSubmit() {
      const id = this.id.replace(' ', '').replace('/', '');
      this.$router.push({
        name: 'home',
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
