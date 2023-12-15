import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p
     className="text-3xl font-bold underline">This is my page</p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="bg-gray-500 text-white p-4">
      This is an example component with Tailwind CSS styling.
    </div>
    </>
  )
}

export default App
