type OscarProps ={
    children: React.ReactNode //As props.children is going to be React Component-> 
                              // We can specify this type(React.ReactNode) provided by React for a React component 
}

const Oscar = (props: OscarProps) => {
  return (
    <>{props.children}</>
  )
}

export default Oscar
