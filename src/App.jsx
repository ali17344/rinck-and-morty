import { useState } from "react"
import HomePage from "./HomePage"
import './style.css'
import axios from 'axios'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import InfoPage from "./InfoPage"
function App() {
  const [data,setData] = useState([])
    const get_api = () => {
          axios.get('https://rickandmortyapi.com/api/character ')
          .then(({data}) => {setData(data.results)})
    }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage get_api={get_api} data={data}/>}/>
        <Route path="/detail/:id" element={<InfoPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
