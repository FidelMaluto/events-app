import mysql from 'mysql2';

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '#########',
    database: 'Projects'
    
});

connection.connect(err => {

    if(err) throw err;
    console.log('Conectado ao MySQL.')
    
});

export default connection;
