
exports.up = function(knex) {
  knex.schema.table("listings", function (table) {
    table.dropColumn("image_data");
    ttable.string("image_data", 1000000);
  });
};

exports.down = function(knex) {
  
};
