import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Excercise02 from './components/excercises/02Excercise'
import Excercise03 from './components/excercises/03Excercise'




function App() {
  const [count, setCount] = useState(0)
  {/*
  const ea = 'src/assets/ea.jpg'
  const john = 'src/assets/john.png'
  const melker = 'src/assets/melker.jpg'
  const aeneas = 'src/assets/aeneas.jpg'
  const fire = 'src/assets/fire.jpg'
  const hittite = 'src/assets/hittite.jpg'
  const gilgamesh = 'src/assets/gilgamesh.jpg'
  const enkidu = 'src/assets/enkidu.jpg'
  const ishtar = 'src/assets/ishtar.jpg'
  const smasha = 'src/assets/shamash.jpg'
  */}


  return (
    <>
      <Excercise02 />
      <div className='border-black border-1 mt-20 mb-20'></div>
      
      <Excercise03/>

    </>
  )
}

export default App
