import { useState } from 'react'

function child() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1>This is child component</h1>
    </div>
  )
}

export default child
