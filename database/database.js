const Sequelize = require('sequelize');
/*const connection = new Sequelize('db_teclinewebsite', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});*/

const connection = new Sequelize('heroku_4cf63ff1e22ca61', 'befc5b4b2effd9', '6241354a', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
});


module.exports = connection;
//user:befc5b4b2effd9
//password:6241354a
//db name: heroku_4cf63ff1e22ca61
//url: us-cdbr-east-05.cleardb.net

//mysql://:@/?reconnect=true