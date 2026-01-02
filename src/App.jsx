import { useState } from 'react'


const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>
        {submitHandler(e)}
      } className='flex gap-4 p-10 lg:w-1/2 flex-col items-start'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* pehla input for heading */}
          <input 
        type="text" 
        placeholder="Enter Notes Heading" 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        {/* second input for details */}
        <textarea 
        type="text" 
        className='px-5 w-full h-30 flex font-medium flex-row items-start py-2 border-2 outline-none rounded'
        placeholder='Write Details here...'
        value={details}
        onChange={(e)=>setDetails(e.target.value)}
        />

        <button className='bg-white active:scale-95 w-full font-medium text-black px-5 py-2 outline-none rounded'>
        Add Notes
        </button>
      
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='flex items-start justify-start gap-5 flex-wrap h-[90%] mt-5 overflow-auto'>

        {task.map(function(elem,idx){
        
            return  <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black pt-8 pb-4 px-4">
            <div>
              <h3 className='leading-tight text-lg  font-bold pt-0.75'>{elem.title}</h3>
              <p className='mt-3 leading-tight text-xs font-medium text-gray-500 pt-2'>{elem.details}</p>
             </div>
              <button onClick={() => deleteNote(idx)} className='w-full bg-red-500 cursor-pointer active:scale-95 py-0.75 text-white text-xs rounded font-medium'>Delete</button>
            </div>
        })}
       </div>
      </div>
    </div>
  )
}

export default App
