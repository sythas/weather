import { useContext } from 'react'
import {ThemeContext} from './Theme'

export default function Text ({fontSize, children}){
  const { theme } = useContext(ThemeContext)

  return <p style={{...theme, fontSize: fontSize || theme.fontSize}}>{children}</p>
}