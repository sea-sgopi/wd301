import './TaskCard.css';

interface TaskCard {
  dueDate: "string",
  completedAtDate : "string",
  assigneeName: "string",
}

const TaskCard = (props) => {
    return (
      <div className='TaskItem py-3 px-5'>
        <h2 className="text-xl font-bold text-left mb-4">{props.title}</h2>
        {props.dueDate && <p className='text-left'>Due on: {props.dueDate}</p>}
        {props.completedAtDate && <p className='text-left'>Completed on: {props.completedAtDate}</p>}
        <p className='text-left'>Assignee: {props.assigneeName}</p>
      </div>
    )
  }


export default TaskCard