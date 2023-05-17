import { useState } from 'react'
import Boxes from "./components/Boxes"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Party from "./components/Party"
import Stats from "./components/Stats"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Party/>
      <Boxes />
    </div>
  )
}

