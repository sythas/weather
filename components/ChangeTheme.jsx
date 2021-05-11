import { useContext } from 'react'
import { ThemeContext } from './Theme'

export default function ChangeTheme ({ style }) {
  const { key, changeTheme} = useContext(ThemeContext)

  const newKey = key === 'light' ? 'dark' : 'light'

  return <button style={{...style, width: 100}} onClick={() => changeTheme(newKey)}>{key === 'light' ? 'Dark' : 'Light'} Mode</button>
}