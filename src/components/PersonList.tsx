type PersonListProps = {
    names:{
        firstname: string,
        lastname: string
    }[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((person, index)=>{
        return <p key={index}>{person.firstname + " " + person.lastname}</p>
      })}
    </div>
  )
}

export default PersonList
