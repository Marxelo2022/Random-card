import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import useQuotes from './hooks/useQuotes'

function App() {
  
  const { userRandom, colorRandom, clickButton } = useQuotes()

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card
        userRandom={userRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App
