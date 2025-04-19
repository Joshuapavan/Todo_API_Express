import db from "../config/database.js";

class Todo {
    static async getAllTodos() {
        const [rows] = await db.query("SELECT * FROM todos");
        return rows;
    }
    static async getTodoById(id) {
        const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
        return rows[0];
    }

    static async createTodo(title){
        const [result] = await db.query("INSERT INTO todos (title) VALUES (?)", [title]);
        return { 
            id: result.insertId, 
            title: title, 
            completed: false 
        }; 
    }

    static async updateTodo(data) {
        const [result] = await db.query(
            "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
            [data.title, data.completed, data.id]
        );
        return result;
    }

    static async deleteTodo(id){
        const [result] = await db.query("DELETE FROM todos WHERE id = ?", [id]);
        return result;
    }
}

export { Todo };