import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { HomePage } from './pages/Homepage'
import { Details } from './pages/Details'

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:name' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
