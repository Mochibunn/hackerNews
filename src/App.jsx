import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pink Floyd - Wish You Were Here</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>So, so you think you can tell</p>
        <p>Heaven from Hell? Blue skies from pain?</p>
        <p>Can you tell a green field from a cold steel rail?</p>
        <p>A smile from a veil? Do you think you can tell?</p>
        <p>Did they get you to trade your heroes for ghosts?</p>
        <p>Hot ashes for trees? Hot air for a cool breeze?</p>
        <p>Cold comfort for change? Did you exchange</p>
        <p>A walk-on part in the war for a lead role in a cage?</p>
      </div>
      <p className="read-the-docs">
      &quot;Wish You Were Here&quot; - From Wish You Were Here (1975)
      </p>
    </>
  )
}

export default App


/*



*/