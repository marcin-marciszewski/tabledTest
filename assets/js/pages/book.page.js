parasails.registerPage("book", {
    data: {
      book: undefined,
    },
    
    mounted: function(){
    },
    beforeMount: function () {
      // Attach any initial data from the server.
      _.extend(this, window.SAILS_LOCALS);
    },
  
    methods: {},
  });