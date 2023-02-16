import React, { useEffect, useRef } from 'react'

const UseRefDOMReference = () => {

    const inputRef = useRef<HTMLInputElement>(null) // initially null

    useEffect(()=>{
        inputRef.current?.focus()
    }, [])

  return (
    <div>
      <input type='text' ref = {inputRef}/>
    </div>
  )
}

export default UseRefDOMReference
