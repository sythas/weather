import Stack from './Stack'
import Icon from './Icon'
import Text from './Text'

function Forecast ({ name, temperature, condition, ...rest}) {
  return  (<Stack flex center>
    <Text fontSize="2rem">{name}</Text>
    <Text{...rest}><Icon name={condition} /> {temperature}&#176;</Text>
  </Stack>)
}

export default Forecast