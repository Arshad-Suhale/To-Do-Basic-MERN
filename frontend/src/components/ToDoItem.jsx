import { Trash } from "lucide-react";

const ToDoItem = ({ todo, ToggleTodo, DeleteTodo }) => {

    return (
        <li className="w-full rounded-base flex gap-3 items-center p-3 bg-surface-secondary">
            <input
                type="checkbox"
                name="isCompleted"
                className="h-4 w-4 cursor-pointer not-checked:accent-success/30 checked:accent-success"
                checked={todo.isCompleted ? true : false}
                onChange={()=>{
                    ToggleTodo(todo._id)
                }}
            />
            <p
                className={`flex-1  ${todo.isCompleted ? "line-through text-text-muted" : "text-text-primary"}`}
            >
                {todo.taskTitle}
            </p>
            <button className="cursor-pointer" onClick={() => {
                DeleteTodo(todo._id)
            }}>
                <Trash className="text-danger" />
            </button>
        </li>
    );
};

export default ToDoItem;
