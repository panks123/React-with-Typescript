import React from 'react'

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange}: InputProps) => { // destructuring the props
    // Suppose that the handler function was not coming as a prop for the input element below
    // and the handler function was defined in this Component itself, then we'ld have defined it as below:

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>)=> {
        console.log("Not as prop",event)
    }
  return (
    <>
        <input type='text' value={value} onChange={handleChange}/>
        <input type='text' value={value} onChange={handleChange1}/>
    </>
    
  )
}

export default Input
