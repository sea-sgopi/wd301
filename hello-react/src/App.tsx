import TaskCard from './TaskCard'

function App() {

  return (
    <div>
      <h1 className='text-4xl font-bold mb-4 text-left'>Smarter Tasks</h1>
      <p className='text-left mb-4 font-semibold'>Project: Graduation Final Year Project (Revamp College Website)</p>
      <div className='flex justify-around mb-4'>
        <div>
          <div className='border border-gray-300 p-6 rounded-2xl'>
            <h3 className='text-2xl mb-4 font-bold'>pending</h3>
            <TaskCard title="Build the website with static content" dueDate='10th April' assigneeName="Rohith S" />
            <TaskCard title='Add a blog' dueDate="22nd March" assigneeName="Rohith M"/>
            <p className='text-gray-500 h-7 bg-gray-300 mt-4  cursor-pointer text-left '>+ New Task</p>
          </div>
        </div>
        <div>
        <div>
          <div className='border border-gray-300 p-6 rounded-2xl'>
            <h3 className='text-2xl mb-4 font-bold'>done</h3>
            <TaskCard title="Design a mockup" completedAtDate='10th April' assigneeName="Rohith M" />
            <TaskCard title='Get the aprroval from principal' completedAtDate="20th April" assigneeName="Ajay S"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}


export default App
