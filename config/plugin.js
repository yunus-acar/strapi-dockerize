module.exports = ({ env }) => ({

   slugify: {
      enabled: true,
      config: {
         contentTypes: {
            article: {
               field: 'slug',
               references: 'title',
            },
         },
      },
   },
   seo: {
      enabled: true,
   },


});