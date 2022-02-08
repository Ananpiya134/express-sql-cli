const db = require('./models');

// db.sequelize
//     .authenticate()
//     .then(() => console.log('db connected'))
//     .catch(err => console.log(err.message));

db.sequelize.sync({ force: false });