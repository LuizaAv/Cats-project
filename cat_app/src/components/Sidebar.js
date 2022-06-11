import React, {useState} from "react"
import "./sidebar.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Categories from "./Categories";

function Sidebar({cats, categories}){
const [categoryValue, setCategoryValue] = useState("")

const selectedCat = (e) => {
    setCategoryValue(e.target.value)
}

    return(
        <div>
            <Router>
                <ul>
                    <li className="item">
                        <Link to="/home">
                            <select className="navbar">
                                <option>
                                    Home
                                </option>
                            </select>
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/about">
                            <select className="navbar">
                                <option>About</option>
                            </select>
                        </Link>
                    </li>
                    <li className="item">
                        <Link to="/">
                            <select className="navbar" id="navbarCategory" onChange={selectedCat} value={categoryValue}>
                                <option>Categories</option>
                                {
                                    categories.map(category => <option value={category.name}>{category.name}</option>)
                                }
                            </select>
                            <Categories cats={cats}/>
                        </Link>
                    </li>
                </ul>
    
                    <Routes>
                        <Route path="/home">Home</Route>
                        <Route path="/about">About</Route>
                        <Route path="/categories">
                            Categories
                        </Route>
                    </Routes>
                </Router>
        </div>
    )
}

export default Sidebar