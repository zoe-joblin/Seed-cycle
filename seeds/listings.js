exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
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
          id: 3,
          listing_title: 'Yucca!',
          category_id: 1,
          lister_name: 'Zoe',
          lister_email: 'zoe@hotmail.com',
          lister_phone: '333',
          suburb: 'Brooklyn',
          city: 'WGTN',
          image_data: './server/public/images/yucca.jpeg'
        },

        {
          id: 4,
          listing_title: 'Bloomscape',
          category_id: 2,
          lister_name: 'Alex T',
          lister_email: 'AT@hotmail.com',
          lister_phone: '444',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/bloomscape.jpeg'
        },

        {
          id: 5,
          listing_title: 'String of Pearls',
          category_id: 3,
          lister_name: 'Oscar',
          lister_email: 'Oscar@hotmail.com',
          lister_phone: '555',
          suburb: 'Karori',
          city: 'WGTN',
          image_data: './server/public/images/string-of-pearls.jpeg'
        },

        {
          id: 6,
          listing_title: 'Cactus',
          category_id: 5,
          lister_name: 'Emily',
          lister_email: 'Emily@hotmail.com',
          lister_phone: '666',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/cactus.jpeg'
        },

        {
          id: 7,
          listing_title: 'Venus flytrap',
          category_id: 6,
          lister_name: 'Kelly',
          lister_email: 'Kelly@hotmail.com',
          lister_phone: '777',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/venus-flytrap.jpeg'
        },

        {
          id: 8,
          listing_title: 'Seedling',
          category_id: 7,
          lister_name: 'Kafele',
          lister_email: 'Kafele@hotmail.com',
          lister_phone: '888',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/seedling.jpeg'
        },

        {
          id: 9,
          listing_title: 'Tomato Plant',
          category_id: 8,
          lister_name: 'Bren',
          lister_email: 'Bren@hotmail.com',
          lister_phone: '999',
          suburb: 'Featherston',
          city: 'WGTN',
          image_data: './server/public/images/tomato-plant.jpeg'
        },

        {
          id: 10,
          listing_title: 'Snake Plant Cuttings',
          category_id: 9,
          lister_name: 'Max',
          lister_email: 'Max@hotmail.com',
          lister_phone: '1010',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/snake-plant-cuttings.jpeg'
        },

        {
          id: 11,
          listing_title: 'Spider Plant',
          category_id: 11,
          lister_name: 'Casey',
          lister_email: 'Casey@hotmail.com',
          lister_phone: '1111',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/spider-plant.jpeg'
        },

        {
          id: 12,
          listing_title: 'Rubber Plant',
          category_id: 12,
          lister_name: 'Juliet',
          lister_email: 'Juliet@hotmail.com',
          lister_phone: '1212',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/rubber-plant.jpeg'
        },

        {
          id: 13,
          listing_title: 'Kawakawa',
          category_id: 13,
          lister_name: 'Ming',
          lister_email: 'Ming@hotmail.com',
          lister_phone: '1313',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/kawakawa.jpeg'
        },

        {
          id: 14,
          listing_title: 'Peace Lily',
          category_id: 11,
          lister_name: 'Alex J',
          lister_email: 'AJ@hotmail.com',
          lister_phone: '222',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/peace-lily.jpeg'
        },

        {
          id: 15,
          listing_title: 'Aloe Vera',
          category_id: 5,
          lister_name: 'Kang',
          lister_email: 'Kang@hotmail.com',
          lister_phone: '1515',
          suburb: 'the city',
          city: 'WGTN',
          image_data: './server/public/images/aloe-vera.jpeg'
        }
      ])
    })
}
