import React from 'react'
import Card from '../Card'
import Lists from '../Lists'
import InfoCard from '../InfoCard'
import Button from '../Button'

export default function Excercise02() {
  return (
    <>
      <h1 className="bg-amber-300">
        hoi
      </h1>
      <p className='bg-purple-700 text-center'>brutal</p>
      <div className='flex justify-center'>
        <Card name={'net dr Mister'} title={'Melker'} />
        <Card name={'Baeneas'} title={'Aeneas'} />
        <Card name={'Melkmir'} title={'Fire'} />
      </div>
        <Lists items={['Beer', 'Tea', 'Radler', 'Leadlined Water']}></Lists>
        <InfoCard image={'src/assets/ea.jpg'} name={'Ea-Nasir'} title={'Copper Merchant'} information={'𒅋 𒌓 𒍪 𒌝 𒊏 𒊏 𒋗 𒌒 𒋾 𒄿 𒆷 𒁴'} imgDescription="picture"></InfoCard>
        <Button title={'Ey'} start={100} ></Button>
    </>
  )
};
