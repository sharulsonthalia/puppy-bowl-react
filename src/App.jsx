import { useState } from 'react'
import './App.css'
import Puppies from './components/Puppies'
import { Routes,Route } from 'react-router-dom'
import SinglePuppy from './components/SinglePuppy'

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Puppies />} />
            <Route path="/:id" element={<SinglePuppy />} />
        </Routes>
    </>
  )
}

export default App
