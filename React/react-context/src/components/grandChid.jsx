import { useState } from 'react'

function grandChild() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1>This is grandChild component</h1>
    </div>
  )
}

export default grandChild
