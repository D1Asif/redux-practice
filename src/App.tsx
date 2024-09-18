import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex p-10 bg-slate-50 rounded-md'>
        <button className='px-3 py-2 bg-green-500 text-white rounded-md font-semibold text-xl'>
          Increment
        </button>
        <h1 className='mx-10 text-3xl'>0</h1>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md font-semibold text-xl'>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
