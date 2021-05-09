
 module.exports = {
    friendlyName: "Books",

    description: "Displays books",
  
    exits: {
      success: {
        viewTemplatePath: "pages/books",
      },
    },
  
    fn: async function () {
      var data = await Books.find({}).populate('comments');;
      return {
        books: data,
      };
    },
  };

