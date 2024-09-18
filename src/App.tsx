import './App.css'
import { decrement, increment } from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const dotCount = Math.floor(count / 5);

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <div className='flex p-10 bg-slate-50 rounded-md'>
        <button
          onClick={() => dispatch(increment())}
          className='px-3 py-2 bg-green-500 text-white rounded-md font-semibold text-xl'
        >
          Increment
        </button>
        <h1 className='mx-10 text-3xl'>
          {count}
        </h1>
        <button
          onClick={() => dispatch(decrement())}
          className='px-3 py-2 bg-red-500 text-white rounded-md font-semibold text-xl'
        >
          Decrement
        </button>
      </div>
      {
        !!dotCount && (
          <div className='mt-5 px-10 py-5 bg-slate-50 rounded-md'>
            {
              [...Array(dotCount).keys()].map((item) => (
                <span key={item}>🟢</span>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App
