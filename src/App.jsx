
import Header from './components/Header'
import Search from './components/Search'
import Selectmenu from './components/Selectmenu'
import './App.css'
import CardsList from './components/CardsList'
import { useState } from 'react'

function App() {
  
const [Query,setQuery]=useState('')
  return (
    <>
      <Header />
      <Search setQuery={setQuery} />
      <Selectmenu/>
      <div>
      {Query === 'unmount' ? '' : <CardsList query={Query} />}
      </div>
      <CardsList Query={Query}/>
    </>
  )
}

export default App
