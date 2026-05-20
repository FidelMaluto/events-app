import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angola@123',
    database: 'Projects'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Conectado ao MySQL.')
});

export default connection;
