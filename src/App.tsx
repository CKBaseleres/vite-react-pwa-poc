import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const headers = {
      "Content-Type":"application/json",
      "ts":"1574846576",
      "nonce":"ebcd9652-e5cc-42db-9537-bb40aaca62fa",
      "mac":"i9em/RYHFWZERdcOv0dMMLsAEZw1VmDTY7Ce1iPoYsM=",
      "producer":"BBGR_FR002",
      "network":"SANTECLAIR",
      "secret":"oeWJgXcC9KUhnKNv",
      "x-api-key":"PnEoNwImT0uOLjrtPwge7EBglsMg02G4",
      "showMac":"true",
      "Accept":"*/*"
    }
    fetch('https://essilor-int.apigee.net:443/v1/nep-reporting', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "store_ids": [7717431],
        "return_type": "base64"
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
