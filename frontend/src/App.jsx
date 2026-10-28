import "./App.css";
import ToDoHeader from "./components/ToDoHeader.jsx";
import ToDoBody from "./components/ToDoBody.jsx";
import {useState } from "react";
import { ToastContainer } from "react-toastify";
import useTask from "./hooks/useTasks.js";

function App() {
    const {
        todos,
        totalTodos,
        pendingTodos,
        completedTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
    } = useTask();
    const [filter, setFilter] = useState("All");
    const visibleTodos = GenerateVisibleTodos(filter, todos);

    // Functions

    function ChangeFilter(currentFilter) {
        setFilter(currentFilter);
    }
    function GenerateVisibleTodos(filter, todos) {
        if (filter === "Pending")
            return todos.filter((todo) => !todo.isCompleted);
        if (filter === "Completed")
            return todos.filter((todo) => todo.isCompleted);
        return todos;
    }

    return (
        <>
            <main className="min-h-screen bg-background p-4 flex flex-col gap-4">
                <ToDoHeader
                    totalTodos={totalTodos}
                    pendingTodos={pendingTodos}
                    completedTodos={completedTodos}
                    ChangeFilter={ChangeFilter}
                    filter={filter}
                />
                <ToDoBody
                    todos={visibleTodos}
                    AddTodo={addTodo}
                    ToggleTodo={toggleTodo}
                    DeleteTodo={deleteTodo}
                />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </main>
        </>
    );
}

export default App;
