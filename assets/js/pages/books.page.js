parasails.registerPage("books", {
    data: {
      books: undefined,
    },
  
    beforeMount: function () {
      // Attach any initial data from the server.
      _.extend(this, window.SAILS_LOCALS);
    },
  
    methods: {},
  });