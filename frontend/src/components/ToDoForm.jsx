import { Plus } from "lucide-react";

const ToDoForm = ({AddTodo}) => {

    function SubmitForm(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        AddTodo(formData.get('taskTitle'))

        e.currentTarget.reset();
    }

    return (
        <div className="w-full bg-surface-elevated border border-border rounded-base shadow-card p-4">
            <form className="flex gap-4 items-center" onSubmit={SubmitForm}>
                <input
                    type="text"
                    required
                    name="taskTitle"
                    className="flex-1 border border-border bg-background px-4 py-3 outline-none rounded-base"
                    placeholder="What Needs To Be Done?"
                />
                <button
                    type="submit"
                    className="px-2 py-2 h-fit bg-primary-light border flex items-center border-primary-light rounded-base gap-1 cursor-pointer hover:bg-primary hover:border-primary-hover text-primary-tint text-md"
                >
                    <Plus size={20} strokeWidth={2.5} />
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;
