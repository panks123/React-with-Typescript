export type ProfileProps = {
    name: string
}

const Profile = ({ name } : ProfileProps) => {
  return (
    <div>
      This is private profile. Name is: {name}
    </div>
  )
}

export default Profile
