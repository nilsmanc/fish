import './App.scss'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details'
import { HomePage } from './pages/Homepage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:name' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
