import React, { useEffect, useState } from 'react'
import Card from './Card'

const Hero = () => {
  const [data, setData] = useState([])

  const url =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=7912e5277f974321b02406e982016dba'

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result.articles || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getData()
  }, [])

  return (
    <div className="bg-slate-300 min-h-screen w-full p-6 flex flex-wrap justify-center gap-6">
      {data.length > 0 ? (
        data.map((item, index) => <Card key={index} article={item} />)
      ) : (
        <p className="text-gray-700 text-lg">Loading news...</p>
      )}
    </div>
  )
}

export default Hero
