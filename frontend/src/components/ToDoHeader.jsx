function ToDoHeader({
    totalTodos,
    pendingTodos,
    completedTodos,
    filter,
    ChangeFilter,
}) {
    return (
        <>
            <div className="w-full sticky top-4 bg-surface-elevated border border-border rounded-base shadow-card p-4 flex justify-between items-center">
                <div className="text-3xl font-bold">Tasks</div>
                <div className="flex gap-3 bg-surface-secondary/50 rounded-base p-1">
                    <button
                        className={`p-1.5 ${filter == "All"?"bg-primary":""} rounded-sm flex items-center gap-2.5 text-sm cursor-pointer`}
                        onClick={() => {
                            ChangeFilter("All");
                        }}
                    >
                        All
                        <span className={`px-2 py-1 min-w-7 h-7 align-middle text-center rounded-4xl ${filter == "All"?"bg-primary-active":"bg-surface-elevated"}`}>
                            {totalTodos}
                        </span>
                    </button>
                    <button
                        className={`p-1.5 ${filter == "Pending"?"bg-primary":""} rounded-sm flex items-center gap-2.5 text-sm cursor-pointer`}
                        onClick={() => {
                            ChangeFilter("Pending");
                        }}
                    >
                        Pending
                        <span className={`px-2 py-1 min-w-7 h-7 align-middle text-center rounded-4xl ${filter == "Pending"?"bg-primary-active":"bg-surface-elevated"}`}>
                            {pendingTodos}
                        </span>
                    </button>
                    <button
                        className={`p-1.5 ${filter == "Completed"?"bg-primary":""} rounded-sm flex items-center gap-2.5 text-sm cursor-pointer`}
                        onClick={() => {
                            ChangeFilter("Completed");
                        }}
                    >
                        Completed
                        <span className={`px-2 py-1 min-w-7 h-7 align-middle text-center rounded-4xl ${filter == "Completed"?"bg-primary-active":"bg-surface-elevated"}`}>
                            {completedTodos}
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDoHeader;
