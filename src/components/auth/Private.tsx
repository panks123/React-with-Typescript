import Login from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
} 

const Private = ({isLoggedIn, Component}: PrivateProps) => {
  
    if(isLoggedIn)
    {
        return <Component name="Pankaj Kumar"></Component>
    }
    else{
        return <Login/>
    }
}

export default Private
