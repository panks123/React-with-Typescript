type HeadingProps = {
    children: string // We have to specify this children propert if we are using the props.children property inside the component
} 

const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Heading
