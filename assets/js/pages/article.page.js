parasails.registerPage("article", {
    data: {
      article: undefined,
      published: '',
      commentCreated: '',
    },
    
    mounted: function(){
      this.published = moment(window.SAILS_LOCALS.article[0].publicationDate).format('DD/MM/YYYY');
      this.commentCreated = moment(window.SAILS_LOCALS.article[0].creationTime).format('h:mm:ss a, DD/MM/YYYY ');;
    },
    beforeMount: function () {
      // Attach any initial data from the server.
      _.extend(this, window.SAILS_LOCALS);
    },

    methods: { 

    },
  });