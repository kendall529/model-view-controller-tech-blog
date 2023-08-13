const Users = require('./Users');
const Comments = require('./Comments');
const Posts = require('./Posts');

Users.belongsTo(Posts, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'user_id',
  // onDelete: 'CASCADE'
});

Groups.belongsToMany(Users, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'group_id',
  // onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: 'user_id'
});

Groups.belongsTo(Users, {
  foreignKey: 'created_by'
});

Users.hasMany(Posts, {
  foreignKey: 'created_by'
});

module.exports = { Users, Comments, Posts };