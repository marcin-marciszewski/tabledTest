  module.exports = {
    friendlyName: 'View single article',
  
    description: 'Display "Single article page.',
  
    exits: {
      success: {
        viewTemplatePath: 'pages/articles/article'
      }
  
    },
  
  
    fn: async function () {
        const data = await Articles.find({id:this.req.param('id')}).populate('comments');;

        
        return {
          article: data,
        };
      },
  
  
  };