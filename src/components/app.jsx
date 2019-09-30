import React from "react"

import Header from "./components/gif"
import MainContent from "./components/giflist"
import Footer from "./components/searchbar"

function App() {
    return (
        <div>
            <Gif />
            <Giflist />
            <Searchbar />
        </div>
    )
  }

export default App
