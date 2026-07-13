import { useState } from 'react'

function parent() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1>This is parent component</h1>
    </div>
  )
}

export default parent
