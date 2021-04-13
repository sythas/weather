import { useState, useEffect} from 'react'
import format from 'date-fns/format'
import Stack from './Stack'
import Text from './Text'

function Clock () {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (<Stack flex center>
    <div>
    <Text fontSize="8rem">{format(now, "hh:mm:ss a")}</Text>
   <Text>{format(now, "MM/dd/yyyy")}</Text>
   </div>
  </Stack>)
}

export default Clock