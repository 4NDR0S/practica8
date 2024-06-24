import React, { useEffect, useState } from 'react'

const random = 'https://catfact.ninja/fact'

export default function useRandomFact() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const getData = async () => {
    const rs = await fetch(random)
    const jsonRs = await rs.json()

    const resultado = jsonRs.fact
    setFact(resultado)

    const threeFirstWords = jsonRs.fact.split(' ', 3).join(' ')
    const rs2 = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    const jsonRs2 = await rs2.json()

    const idImg = jsonRs2._id
    const urlImg = `https://cataas.com/cat/${idImg}/says/${threeFirstWords}`
    setImageUrl(urlImg)
  }

  const refreshFact = async () => {
    await getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    fact,
    imageUrl,
    refreshFact
  }
}