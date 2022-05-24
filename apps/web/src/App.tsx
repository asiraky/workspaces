import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

import { Button } from '@pxmo/components'

const Div = styled.div`
  border: 1px solid white;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button label="Hello" />
        </p>
    
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </Div>
  )
}

export default App
