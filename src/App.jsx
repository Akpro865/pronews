import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './screen/Home'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import CategoryNews from './components/CategoryNews'

function App() {
  const [headlines, setHeadlines] = useState(null)

  useEffect(()=>{
    (async()=>{
      const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=14f43dc865744037893a18ed961af39e')
      console.log(data.articles)
      setHeadlines(data.articles)
    })()
  }, [])

  return (
    <Router>
      <Header />      
      <Routes>
        <Route path='/' element={<Home headlines={headlines}/>} />
        <Route path='/category/:category' element={<CategoryNews />} />        
      </Routes>      
    </Router>
  )
}

export default App
