import { useState } from 'react'

import GoogleLoginButton from './components/GoogleLoginButton'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GoogleLoginButton>asd</GoogleLoginButton>
      < Home />
    </>
  )
}

export default App
