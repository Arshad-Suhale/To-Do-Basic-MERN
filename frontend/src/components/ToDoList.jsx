import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, ToggleTodo, DeleteTodo}) => {
    return (
        <div className="w-full flex-1 bg-surface-elevated border border-border rounded-base shadow-card p-4">
            <ul className="overflow-y-auto flex flex-col gap-3">
                {
                    todos.map(todo => {
                        return <ToDoItem todo={todo} key={todo._id} ToggleTodo={ToggleTodo} DeleteTodo={DeleteTodo}/>
                        
                    })
                }
            </ul>
        </div>
    );
};

export default ToDoList;
