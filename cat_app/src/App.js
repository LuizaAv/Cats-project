import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar"

function App() {
  const [cats, setCats] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1`)
      .then(response => response.json())
      .then(response => setCats(response))
  }, [])

  useEffect(() =>{
    fetch(`https://api.thecatapi.com/v1/categories`)
      .then(response => response.json())
      .then(response => setCategories(response))
  }, [])


  return (
    <div className="App">
        <Sidebar cats={cats} categories={categories}/>
    </div>
  );
}

export default App;
