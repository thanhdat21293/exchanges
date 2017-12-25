
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'name1',
          email: '1@gmail.com'
        },
        {
          name: 'name2',
          email: '2@gmail.com'
        },
        {
          name: 'name3',
          email: '3@gmail.com'
        }
      ]);
    });
};