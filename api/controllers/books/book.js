  module.exports = {
    friendlyName: 'View single book',

    description: 'Display "Single book page.',
  
    exits: {
      success: {
        viewTemplatePath: 'pages/books/book'
      }
    },
  
    fn: async function () {
    const data = await Books.find({id:this.req.param('id')}).populate('comments');;

      return {
        book: data,
      };
    }, 
  };