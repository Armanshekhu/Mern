import { useState } from 'react'

function grandParent() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <h1>This is grandParent component</h1>
    </div>
  )
}

export default grandParent
