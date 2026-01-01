import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>
        {submitHandler(e)}
      } className='flex gap-4 p-10 lg:w-1/2 flex-col items-start'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>


          <input 
        type="text" 
        placeholder="Enter Notes Heading" 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        />
        <textarea 
        type="text" 
        className='px-5 w-full h-30 flex font-medium flex-row items-start py-2 border-2 outline-none rounded'
        placeholder='Write Details'
        />
        <button className='bg-white w-full font-medium text-black px-5 py-2 outline-none rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='flex gap-5 flex-wrap h-full mt-5 overflow-auto'>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
       </div>
      </div>
    </div>
  )
}

export default App
