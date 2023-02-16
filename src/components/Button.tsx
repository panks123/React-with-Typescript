import React from 'react'

// We want to recieve a click event as a prop in this component

type ButtonProps = {
    handleClick: ()=> void // void means the handleClick function does not return anything 
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button
