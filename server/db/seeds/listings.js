exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      const image = 'data:image/jpeg;base64,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'
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
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
          image_data: image
        }
      ])
    })
}
