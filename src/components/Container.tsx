import React from 'react'

type ContainerProps = {
    style: React.CSSProperties // We pass CSS properties as string but using React.CSSProperties, it can strictly check for valid CSS properties and values, we can not pass any wrong CSS property or value
}

const Container = (props: ContainerProps) => {
  return (
    <div style={props.style}>
      This is a container
    </div>
  )
}

export default Container
