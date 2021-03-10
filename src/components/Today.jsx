import Stack from "./Stack"
import Forecast from './Forecast'
import Clock from './Clock'
import Divider from "./Divider"

function Today() {
  return (<Stack direction="row">
    <Forecast name="Today" temperature="61" condition="sunny" fontSize="8rem" />
    <Divider vertical />
    <Clock /> 
  </Stack>)
}

export default Today