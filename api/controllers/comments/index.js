
 module.exports = {
    friendlyName: "Comments",

    description: "Displays comments",
  
    exits: {
      success: {
        viewTemplatePath: "pages/comments",
      },
    },
  
    fn: async function () {
      var data = await Comments.find({});
      return {
        comments: data,
      };
    },
  };
