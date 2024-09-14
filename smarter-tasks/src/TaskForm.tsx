import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTasks: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    description: string;
    dueDate: string;
}

const TaskForm = (props:TaskFormProps) => {
const [formState, setFormState] = React.useState<TaskFormState>({
    title: '',
    description: '',
    dueDate: '',
});

const titleChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({...formState, title:event.target.value})
}

const descriptionChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({...formState, description:event.target.value})
}

const dueDateChanged:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({...formState, dueDate:event.target.value})
}

const addTask:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if(formState.title.length === 0 || formState.dueDate.length ===0 ) {
        return;
    }
    props.addTasks(formState);
    setFormState({title: '', description: '', dueDate: ''});
}
return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            required
            value={formState.title}
            onChange={titleChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="todoTitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoDescription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.dueDate}
            onChange={dueDateChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoDueDate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            id="addTaskButton"
            className="text-white bg-green-600 ml-3 hover:bg-green-700 font-medium rounded px-2 py-2"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;