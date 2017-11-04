const knex = require('knex');
const knexFile = require('./knexfile');

function ensureDb() {
    return knex(knexFile)('user');
}

module.exports = {
  createUser(data) {
      const db = ensureDb();
      return db.insert(data);
  },

  getAllUsers() {
      const db = ensureDb();
      return db.select();
  },

  getOneUser(id) {
      const db = ensureDb();
      return db.where('id', id).select();
  },

  updateUser(id, data) {
    const db = ensureDb();
    return db.where('id', id).update(data);
  },

  deleteUser(id) {
    const db = ensureDb();
    return db.where('id', id).del();
  }
};