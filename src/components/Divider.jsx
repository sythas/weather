import { useContext } from "react"
import { ThemeContext } from "./Theme"

export default function Divider () {
  const { key } = useContext(ThemeContext)
  
  let style = {
    border: `1px solid ${key === 'light' ? '#ddd' : '#333'}`,
    margin: '1rem'
  }

  return (<div style={style}/>)
}