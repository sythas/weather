import format from 'date-fns/format'
import useCurrentTime from '../hooks/useCurrentTime'
import Stack from './Stack'
import Text from './Text'

function Clock () {
  const now = useCurrentTime()

  return (<Stack flex center>
    <Text fontSize="4rem">{format(now, "pp")}</Text>
    <Text fontSize="2rem" >{format(now, "PPPP")}</Text>
  </Stack>)
}

export default Clock