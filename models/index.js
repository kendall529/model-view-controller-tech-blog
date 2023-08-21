const Users = require('./Users');
const Comments = require('./Comments');
const Posts = require('./Posts');

Users.hasMany(Posts, {
  foreignKey: 'created_by'
});

Posts.belongsTo(Users, {
  foreignKey: 'created_by'
});

Comments.belongsTo(Users, {
  foreignKey: 'user_id'
});

Users.hasMany(Comments, {
    foreignKey: 'user_id'
});



module.exports = { Users, Comments, Posts };