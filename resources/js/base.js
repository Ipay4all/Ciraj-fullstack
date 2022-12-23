export default {
  computed: {},
  
  methods: {
    /**
    * Show an error message.
    */
    alertError (message, autoClose= 10000) {
      this.$notify(
        {
          title: 'Error',
          text: message,
          type: 'error',
        }, autoClose)
    },

    /**
    * Show a success message.
    */
    alertSuccess (message, autoClose = 10000) {
      this.$notify(
        {
          title: 'Success',
          text: message,
          type: 'success',
        }, autoClose)
    },

    /**
    * Show a warning message.
    */
    alertWarning (message, autoClose) {
      this.$notify(
        {
          title: 'Warning',
          text: message,
          type: 'warning',
        }, autoClose)
    },

    /**
    * Show confirmation message.
    */
    alertConfirm (message, success, failure, autoClose= 10000) {
      this.$notify(
        {
          title: 'Confirm',
          text: message,
          type: 'confirm',
          success, failure
        }, autoClose)
    },
  }
}
