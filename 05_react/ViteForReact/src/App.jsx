import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lists from './components/Lists'
import Card from './components/Card'
import InfoCard from './components/InfoCard'
import Button from './components/Button'
import PeopleCard from './components/PeopleCard'
import PeopleContainer from './components/peopleContainer'



function App() {
  const [count, setCount] = useState(0)
  const ea = 'src/assets/ea.jpg'
  const john = 'src/assets/john.png'
  const melker = 'src/assets/melker.jpg'
  const aeneas = 'src/assets/aeneas.jpg'
  const fire = 'src/assets/fire.jpg'
  const hittite= 'src/assets/hittite.jpg'
  const gilgamesh = 'src/assets/gilgamesh.jpg'
  const enkidu = 'src/assets/enkidu.jpg'
  const ishtar = 'src/assets/ishtar.jpg'
  const smasha = 'src/assets/shamash.jpg'

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
        <Lists items={['Beer', 'Tea', 'Radler', 'Leadlined Water']}></Lists>
        <InfoCard image={ea} name={'Ea-Nasir'} title={'Copper Merchant'} information={'𒅋 𒌓 𒍪 𒌝 𒊏 𒊏 𒋗 𒌒 𒋾 𒄿 𒆷 𒁴'} imgDescription="picture"></InfoCard>
        <Button title={'Ey'} start={100} ></Button>
        <PeopleCard titles={['Schmishtar', 'dr Melker', 'Great King of Kings', 'Saggumar', 'Kollege', 'Freund der Sonne']} names={['Ishtar', 'net dr Mister', 'Gilgamesh', 'Ea-Nasir', 'Melkmir', 'Shamash']} image={[ishtar, enkidu, gilgamesh, ea, hittite, smasha]} imgDescription={['evil goddess', 'weird taurus creature']} ></PeopleCard>
        
        
        
    </>
  )
}

export default App
