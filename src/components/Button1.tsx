import React from 'react'

type Button1Props = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void // here React.MouseEvent is a type provided by React and this becomes more specific when we specify <HTMLButtonElement>
}

const Button1 = (props: Button1Props) => {
  return (
    <button onClick={(event)=> { props.handleClick(event, 1)} }>Click me</button>
  )
}

export default Button1
