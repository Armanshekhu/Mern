import { useState } from 'react'

function Dashboard({email}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Dashboard Page</h2>
      <h2>Your Email is : {email}</h2>
    </div>
  )
}

export default Dashboard
