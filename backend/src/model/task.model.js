import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskTitle: {
        required: true,
        type: String
    },
    taskDescription: {
        type: String,
        default: ""
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const taskModel = mongoose.model('tasks', taskSchema);

export default taskModel;