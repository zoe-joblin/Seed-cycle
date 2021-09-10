exports.up = (knex) => {
  return knex.schema.createTable('listings', (t) => {
    t.increments('id').primary()
    t.string('listing_title')
    t.integer('category_id')
    t.string('lister_name')
    t.string('lister_email')
    t.string('lister_phone')
    t.string('suburb')
    t.string('city')
    t.string('image_data')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('listings')
}
