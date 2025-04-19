import { Todo } from "../models/todo.js";

class TodoController{
    static async getAllTodos(req, res) {
        try {
            const todos =  await Todo.getAllTodos();

            if(todos.length > 0){
                res.status(200);
                res.send({
                    success: true,
                    status: 200,
                    message: "Successfully fetched all the todos",
                    todos: todos
                })
            }else{
                res.status(404);
                res.send({
                    success: false,
                    status: 404,
                    message: "Todos are not present in the db",
                    todos: []
                })
            }

        }
        catch(err) {
            TodoController.handleError(res, err);
        }
    }

    static async createTodo(req, res){
        try{
            const { title } = req.body
            const todo = await Todo.createTodo(title);            
            
            if(todo){
                res.status(201);
                res.send({
                    success: true,
                    status: 201,
                    message: "Successfully created the Todo in the database",
                    todo: todo
                })
            }
            else{
                res.send(400);
                res.send({
                    success: false,
                    status: 400,
                    message: "Error while creating the todo",
                })
            }
        }
        catch(error){
            TodoController.handleError(res, error)
        }
    }

    static async getTodoById(req, res) {
        try{
            const { id } = req.params
            const todo = await Todo.getTodoById(id);

            if (todo){
                res.status(200);
                res.send({
                    success: true,
                    status: 200,
                    message: `Successfully fetched the Todo by ID ${id}`,
                    todo: todo
                })
            }else{
                res.status(404);
                res.send({
                    success: true, 
                    status: 404,
                    message: `The todo with id ${id} was not found in the database`
                })
            }
        }
        catch(error){
            TodoController.handleError(res, error);
        }
    }

    static async updateTodo(req, res) {
         try {
            const { id } = req.params;
            const { title, completed } = req.body;
            
            const result = await Todo.updateTodo({ id, title, completed });
            const updatedTodo = await Todo.getTodoById(id);

            if (result.affectedRows > 0) {
                res.status(200).send({
                    success: true,
                    status: 200,
                    message: "The Todo was successfully updated",
                    todo: updatedTodo
                });
            } else {
                res.status(400).send({
                    success: false,
                    status: 400,
                    message: "There was some error while updating the Todo"
                });
            }
        }
        catch(error) {
            TodoController.handleError(res, error);
        }
    }

    static async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const result = await Todo.deleteTodo(id);

            if (result.affectedRows > 0) {
                res.status(200).send({
                    success: true,
                    status: 200,
                    message: `Successfully deleted todo with id ${id}`
                });
            } else {
                res.status(404).send({
                    success: false,
                    status: 404,
                    message: `Todo with id ${id} not found`
                });
            }
        }
        catch(error) {
            TodoController.handleError(res, error);
        }
    }

    static handleError(res, error) {
        console.error("Error:", error.message);
        res.status(500).send({
            success: false,
            status: 500,
            message: "Error while doing the operation todo",
            error: error.message
        });
    }
}

export { TodoController };