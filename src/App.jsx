import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantView from './pages/RestaurantView'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant_view/:id' element={<RestaurantView/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
