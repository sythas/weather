import format from 'date-fns/format'
import Stack from './Stack'
import Text from './Text'

function Clock () {
  const now = new Date()

  return (<Stack flex center>
    <div>
    <Text fontSize="8rem">{format(now, "hh:mm a")}</Text>
   <Text>{format(now, "MM/dd/yyyy")}</Text>
   </div>
  </Stack>)
}

export default Clock