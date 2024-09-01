const connection = require('./config/db');

connection.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connection successful:', results);
  }
  connection.end();
});
