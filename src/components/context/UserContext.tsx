import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = { 
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> // copied from the suggestion
}

export const UserContext = createContext<UserContextType | null>(null) // Here we specified the type initially can be null and in future it could be UserContextType

export const UserContextProvider = ({ children }: UserContextProviderProps) =>{

    const [user, setUser] = useState<null | AuthUser>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}