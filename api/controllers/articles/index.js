/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    friendlyName: "Articles",

    description: "Displays the Garduino History for the last Month",
  
    exits: {
      success: {
        viewTemplatePath: "pages/articles",
      },
    },
  
    fn: async function () {
      var data = await Articles.find({});
      return {
        articles: data,
      };
    },
  };

