type GreetProps ={
  name: string,
  messageCount?: number, // optional
  isLoggedIn: boolean
}
// As we know that props is an object so we define GreetProps as an object with the properties that we are going to pass
const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      { props.isLoggedIn? `Hello ${props.name}! You have ${messageCount} unread messages.`: `Welcome Guest` }
    </div>
  )
}

export default Greet
