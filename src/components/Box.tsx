import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
const Box = () => {
    const theme  = useContext(ThemeContext)
  return (
    <div style={ {backgroundColor: theme.secondary.main}}>
      Theme Context
    </div>
  )
}

export default Box
