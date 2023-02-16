import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

//  Let' see how we can use typescript with useState
const UseStateDemo = () => {
    const [count, setCount] = useState<number>(0) // we can specify the type like this
    // However, typescript inference the type as number
    // const [count, setCount] = useState(0) // This line will also work as above without specifying the type due to inferenc concept in typescript

    // But there might be situations were we have to define the types mandatorily
    // Let' see an example where the value of the state is null initially but in future it changes to different type

    const [user, setUser] = useState<AuthUser | null>(null) // initial value is null

    const handleLogin = ()=>{
        setUser({
            name: "Pankaj",
            email: "pankaj@gmail.com"
        })
    }

    const handleLogOut = ()=>{
        setUser(null)
    }

  return (
    <div>
      <p>Count: {count} | <button onClick={()=> setCount((prevCount)=>{ return prevCount + 1})}>Increment count</button></p>
      <div>
        Name: {user?.name} | email: {user?.email}
        <p>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
        </p>
      </div>
    </div>
  )
}

export default UseStateDemo
