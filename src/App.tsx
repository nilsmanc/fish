import './App.scss'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details'
import { HomePage } from './pages/Homepage'
import { CircularProgress } from '@mui/material'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.fishwatch.gov/api/species')
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
    setIsLoading(false)
  }, [])

  console.log(isLoading)
  return (
    <div>
      <Header />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Routes>
          <Route path='/' element={<HomePage data={data} />} />
          <Route path='/:name' element={<Details />} />
        </Routes>
      )}
    </div>
  )
}

export default App
