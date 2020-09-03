export default {
  methods: {
    close() {
      this.$emit('close');
    },
    goBack() {
      this.$router.back();
    },
  },
};
