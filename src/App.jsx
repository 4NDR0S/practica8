import React from 'react'
import useRandomFact from './Hooks/randomFact'

export default function App() {
  const { fact, imageUrl, refreshFact } = useRandomFact()

  const handleClick = async () => {
    await refreshFact()
  }

  return (
    <main className='left-0 right-0 mx-auto w-[600px] bg-cyan-50 mt-8 p-8'>
      <h1 className='font-bold text-center text-3xl py-6'>App de gatitos 😼</h1>
      <button onClick={handleClick} className='w-[60%] bg-amber-500 text-blue-950 text-3xl py-3 text-center mx-[20%] rounded-3xl my-6 shadow-2xl'>Nuevo fact 🐈‍⬛</button>
      <p className='py-6 text-xl'>{fact}</p>
      {imageUrl && <img src={imageUrl} alt={fact} className='w-full bg-slate-800 p-1 shadow-2xl'/>}
    </main>
  )
}