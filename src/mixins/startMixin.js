export default {
  methods: {
    onStart() {
      setTimeout(() => {
        this.messages.push({
          content:
            'Welcome to the Chat-Bot interview for ' + this.meta.name + '!\n',
          own: false,
          key:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
        });
      }, 500);

      setTimeout(() => {
        this.messages.push({
          content:
            'You will get questions and answer these.\n First let me get your credentials.',
          own: false,
          key:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
        });
      }, 3000);

      setTimeout(() => {
        this.messages.push({
          content: 'What is your name?',
          cb: this.gotName,
          own: false,
          key:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
        });
        this.disabled = false;
      }, 5000);
    },

    gotName(name) {
      this.disabled = true;
      this.name = name;
      this.messages.push({
        content: 'Hello ' + name + '!',
        own: false,
        key:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
      });

      setTimeout(() => {
        this.messages.push({
          content: 'Nice to meet you',
          own: false,
          key:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
        });
      }, 1000);

      setTimeout(() => {
        this.messages.push({
          content: 'How can I contact you? Please enter an email.',
          cb: this.gotEmail,
          own: false,
          key:
            '_' +
            Math.random()
              .toString(36)
              .substr(2, 9),
        });
        this.disabled = false;
      }, 2000);
    },

    connectInterview() {
      this.isLoading = true;
    },

    gotEmail(email) {
      this.email = email;
      this.messages.push({
        content: 'Alright! Lets begin the interview',
        cb: this.gotEmail,
        own: false,
        key:
          '_' +
          Math.random()
            .toString(36)
            .substr(2, 9),
      });
      this.connectInterview();
      this.disabled = true;
    },
  },
};
