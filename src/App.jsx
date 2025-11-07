import { useState } from 'react'

import GoogleLoginButton from './components/auth/GoogleLoginButton'
import Home from './components/Home'
import AuthPanel from './components/auth/AuthPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthPanel/>
      < Home />
    </>
  )
}

export default App
