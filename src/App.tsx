import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Info } from './pages/Info'
import { List } from './pages/List'

import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:name' element={<Info />} />
      </Routes>
    </>
  )
}

export default App
