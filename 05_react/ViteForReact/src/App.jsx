import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-amber-300">
        hoi
      </h1>
      <p className='bg-purple-700 text-center'>brutal</p>
      <div className='flex justify-center'>
        <Card name={'net dr Mister'} title={'Melker'}/>
        <Card name={'Baeneas'} title={'Aeneas'}/>
        <Card name={'Melkmir'} title={'Fire'}/>

      </div>

      test


    </>
  )
}

export default App
