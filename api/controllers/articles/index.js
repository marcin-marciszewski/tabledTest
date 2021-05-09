 module.exports = {
  friendlyName: "Articles",

  description: "Displays the Garduino History for the last Month",

  exits: {
    success: {
      viewTemplatePath: "pages/articles",
    },
  },

  fn: async function () {
    const data = await Articles.find({}).populate('comments');
    
    return {
      articles: data,
    };
  },
};