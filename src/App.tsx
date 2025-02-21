import { useState } from 'react'
import './App.css'
import { Button,  } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>
        Click me! Count: {count}
      </Button>
    </>
  )
}

export default App
