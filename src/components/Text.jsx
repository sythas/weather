import { useContext } from 'react'
import {ThemeContext} from './Theme'

export default function Text ({fontSize, textAlign = 'left', children}){
  const { theme } = useContext(ThemeContext)

  return <p style={{...theme, fontSize: fontSize || theme.fontSize, textAlign}}>{children}</p>
}