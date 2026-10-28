const baseUrl = "http://localhost:3000/api/task";

export async function getTasks() {
    const response = await fetch(baseUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const todosData = await response.json();
    return todosData.data;
}

export async function createTask(taskTitle) {
    const payload = { taskTitle };
    const response = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const createdTaskData = await response.json();
    return {
        task: createdTaskData.data,
        message: createdTaskData.message,
    };
}

export async function deleteTask(id) {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const deletedTaskData = await response.json();
    return deletedTaskData.message;
}

export async function updateTask(id, payload) {
    const response = await fetch(`${baseUrl}/edit/${id.toString()}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const updatedTaskData = await response.json();

    return {
        task: updatedTaskData.data,
        message: updatedTaskData.message
    }
}
