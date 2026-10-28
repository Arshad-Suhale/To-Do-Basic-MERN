import taskModel from "../model/task.model.js";

/**
 * Create Task
 */
export async function CreateTask(req, res) {
    let { taskTitle, taskDescription, isCompleted } = req.body;

    if (!taskTitle) {
        return res.status(400).json({
            message: "Task Title is Required",
        });
    }

    let task = await taskModel.create({
        taskTitle,
        taskDescription,
        isCompleted,
    });
    return res.status(201).json({
        message: "Task Created Successfully",
        data: task,
    });
}

/**
 * View Task
 */
export async function GetTasks(req, res) {
    let tasks = await taskModel.find();
    return res.status(200).json({
        message: "Tasks Data Fetched Successfully",
        data: tasks,
    });
}

/**
 * Update Task
 */
export async function UpdateTask(req, res) {
    let { taskTitle, taskDescription, isCompleted } = req.body;
    let id = req.params.id;

    if (!taskTitle) {
        return res.status(400).json({
            message: "Task Title is Required",
        });
    }
    if (!id) {
        return res.status(400).json({
            message: "Task Id is Required",
        });
    }

    let task = await taskModel.findOne({ _id: id });
    task.taskTitle = taskTitle;
    task.taskDescription =
        taskDescription != undefined ? taskDescription : task.taskDescription;
    task.isCompleted =
        isCompleted != undefined ? isCompleted : task.isCompleted;
    let updatedTask = await task.save();

    return res.status(200).json({
        message: "Updated Successfully",
        data: updatedTask,
    });
}

/**
 * Delete Task
 */
export async function DeleteTask(req, res) {
    let id = req.params.id;

    console.log(id);

    if (!id) {
        return res.status(400).json({
            message: "Id is Required",
        });
    }

    let deletedTask = await taskModel.findOneAndDelete({ _id: id });

    return res.status(200).json({
        message: "Deleted Successfully",
        data: deletedTask,
    });
}
