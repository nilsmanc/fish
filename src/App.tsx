import './App.css'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details'
import { HomePage } from './pages/Homepage'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
    }

    fetch('https://www.fishwatch.gov/api/species', options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage data={data} />} />
        <Route path='/:name' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
