import Stack from './Stack'
import Today from './Today'
import Week from './Week'
import ChangeTheme from './ChangeTheme'
import { useContext} from 'react'
import { ThemeContext } from './Theme'
import Divider from './Divider'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <Stack style={{...theme, height: '100%', padding: '1rem'}}>
      <ChangeTheme />
      <Today />
      <Divider />
      <Week />
    </Stack>
  );
}

export default App;

