import mysql from "mysql2";

const config = {
    host: "localhost",
    user: "root",
    password: "1234567890",
    database: "todo_db"
};

const db = mysql.createConnection(config).promise();

export default db;