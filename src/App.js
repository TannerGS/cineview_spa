import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import ShowGrid from './components/show/ShowGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('wandavision')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://api.tvmaze.com/search/shows?q=${query}`
      )

      // console.log(result.data[0]['show']['url'])

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div>
      <div className='container'>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <ShowGrid isLoading={isLoading} items={items} />
      </div>
      <Footer />
    </div>
  )
}

export default App