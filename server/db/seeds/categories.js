exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, category: 'large pot-plants' },
        { id: 2, category: 'small pot-plants' },
        { id: 3, category: 'hanging pot-plants' },
        { id: 4, category: 'ferns' },
        { id: 5, category: 'succulent' },
        { id: 6, category: 'carnivorous' },
        { id: 7, category: 'seedling' },
        { id: 8, category: 'vegetable' },
        { id: 9, category: 'cutting' },
        { id: 10, category: 'seeds' },
        { id: 11, category: 'low-maintenance' },
        { id: 12, category: 'tropical' },
        { id: 13, category: 'medicinal' }
      ])
    })
}
