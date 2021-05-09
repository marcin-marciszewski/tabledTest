 module.exports = {
  friendlyName: "Articles",

  description: "Displays Articles",

  exits: {
    success: {
      viewTemplatePath: "pages/articles/articles",
    },
  },

  fn: async function () {
    const data = await Articles.find({}).populate('comments');
    return {
      articles: data,
    };
  },
};