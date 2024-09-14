import React from "react";
import "./TaskCard.css";

interface TaskProp {
    title: string;
    description?: string;
    dueDate: string;
    onDelete: () => void; 
}

const Task:React.FC<TaskProp> = (props) => {
    return (
        <div className="TaskItem shadow-md border border-slate-100">
            <h3 className="text-base font-bold my-1">
                {props.title} ({props.dueDate})
            </h3>
            <p className="text-sm text-slate-500">
                {props.description ? `Description: ${props.description}` : "No description"}
            </p>
            <button 
                className="deleteTaskButton text-white  bg-red-500 hover:bg-red-700 font-medium  mt-4 rounded px-2 py-1"
                onClick={props.onDelete}
            >
                Delete
            </button>
        </div>
    );
}

export default Task;