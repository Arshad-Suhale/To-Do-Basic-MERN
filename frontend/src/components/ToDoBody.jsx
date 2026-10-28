import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function ToDoBody({todos, AddTodo, ToggleTodo, DeleteTodo}) {
    return (
        <>
            <ToDoForm AddTodo={AddTodo}/>
            <ToDoList todos={todos} ToggleTodo={ToggleTodo} DeleteTodo={DeleteTodo}/>
        </>
    );
}

export default ToDoBody;
