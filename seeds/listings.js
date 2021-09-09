
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          listing_title: 'Maidenhair Fern!',
          category_id: 4,
          lister_name: 'Jo',
          lister_email: 'jo@hotmail.com',
          lister_phone: '111',
          suburb: 'Hataitai',
          city: 'WGTN',
          image_data: './server/public/images/Fern.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

        {
          id: 2,
          listing_title: 'Carrot Seeds',
          category_id: 10,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seeds.jpeg'
        },

      ])
    })
}
