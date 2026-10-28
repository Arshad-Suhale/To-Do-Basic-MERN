import { useEffect, useState } from "react";
import {
    createTask,
    deleteTask,
    getTasks,
    updateTask,
} from "../api/taskApi.js";
import { toast } from "react-toastify";

export default function useTask() {
    const [todos, setTodos] = useState([]);
    const [totalTodos, pendingTodos, completedTodos] = calculateListSize();

    useEffect(() => {
        async function fetchTodos() {
            try {
                const tasks = await getTasks();
                setTodos(tasks);
            } catch (e) {
                toast.error("Failed To Fetch Todos!");
            }
        }
        fetchTodos();
    }, []);

    function calculateListSize() {
        const totalTodos = todos.length;
        const pendingTodos = todos.filter((todo) => !todo.isCompleted).length;
        const completedTodos = todos.filter((todo) => todo.isCompleted).length;

        return [totalTodos, pendingTodos, completedTodos];
    }
    async function addTodo(taskTitle) {
        try {
            const { task, message } = await createTask(taskTitle);
            toast.success(message);
            setTodos((previousTodos) => [...previousTodos, task]);
        } catch (e) {
            toast.error("Failed to Add New Task");
            console.error(`Error in AddTodo(): ${e}`);
        }
    }

    async function toggleTodo(id) {
        try {
            const currentTodo = todos.find((todoItem) => todoItem._id === id);
            if (!currentTodo) {
                toast.error("Task not found");
                return;
            }
            const payload = {
                ...currentTodo,
                isCompleted: !currentTodo.isCompleted,
            };
            const { task, message } = await updateTask(id, payload);
            toast.success(message);
            setTodos((previousTodos) =>
                previousTodos.map((todoItem) => {
                    if (todoItem._id === id) return task;
                    else return todoItem;
                }),
            );
        } catch (e) {
            console.error(`Error in ToggleTodo(): ${e}`);
            toast.error("Failed to Update Task");
        }
    }
    async function deleteTodo(id) {
        try {
            const deletedTaskMessage = await deleteTask(id);
            toast.success(deletedTaskMessage);
            setTodos((previousTodos) =>
                previousTodos.filter((todoItem) => todoItem._id !== id),
            );
        } catch (e) {
            toast.error("Failed to Delete Task");
            console.error(`Error in DeleteTodo(): ${e}`);
        }
    }

    return {
        todos,
        totalTodos,
        pendingTodos,
        completedTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
    };
}
