import mysql from "mysql2";

const config =  {
    host: "localhost",
    user: "root",
    password: "1234567890",
    port: 3306,
    database: "todo_db",
    table: "todos"
}

export const initializeDb = async () => {
    const connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password
    }).promise();

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database}`);
        await connection.query(`USE ${config.database}`);
        await connection.query(`
            CREATE TABLE IF NOT EXISTS todos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                completed BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Database initialization failed:', error);
        throw error;
    } finally {
        await connection.end();
    }
};