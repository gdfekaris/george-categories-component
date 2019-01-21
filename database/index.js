const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'categories_module'
  // host: process.env.RDS_HOSTNAME,
  // user: process.env.RDS_USERNAME,
  // password: process.env.RDS_PASSWORD,
  // port: process.env.RDS_PORT,
  // database: 'categories_module'
});

connection.connect((err) => {
  if (err) {
    console.log(`ERROR: ${err.message}`);
  } else {
    console.log('database connected');
  }

  // if (err) {
  //   process.env['msg'] = 'Unable to connect to RDS - ' + err;
  // } else {
  //   process.env['msg'] = 'Success! Connected to RDS via ' + process.env.RDS_HOSTNAME;
  // }
});

module.exports.connection = connection;