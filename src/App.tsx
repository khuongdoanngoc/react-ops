import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 hover:drop-shadow-xl transition-all" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow hover:drop-shadow-xl transition-all" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-8">Vite + React</h1>
      <div className="p-6 border rounded-md shadow-md max-w-md mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
        <p className="text-gray-700">
          Edit <code className="bg-gray-100 p-1 rounded text-sm">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
