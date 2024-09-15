import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props{
    tasks: TaskItem[];
    onDelete: (index: number) => void;
}

const TaskList: React.FC<Props> = (props) => {
    const list = props.tasks.map((task, idx) => (
        <Task
            key={idx}
            item={task}
            // description={task.description}
            // dueDate={task.dueDate}
            removeTask={() => props.onDelete(idx)} 
        />
    ));
    return (
        <div>
            {list}
        </div>
    );
}

export default TaskList