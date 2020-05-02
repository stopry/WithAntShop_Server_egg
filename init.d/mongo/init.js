/* eslint-disable */

/**
 * 1. create custom user
 * 2. create collection (Before MongoDB can save your new database, a collection name must also be specified at the time of creation.)
 */
db.createUser({
  user: 'egg_sports',
  pwd: 'egg_sports',
  roles: [
    {
      role: 'readWrite',
      db: 'egg_sports'
    }
  ]
})

db.egg_sports.insert({
  egg_sports: 'egg_sports'
})
