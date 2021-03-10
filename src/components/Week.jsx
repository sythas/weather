import Stack from "./Stack"
import Forecast from './Forecast'
import Divider from "./Divider";

function Week() {
  return (<Stack direction="row">
    <Forecast name="Wednesday" temperature="59" condition="sunny" />
    <Divider />
    <Forecast name="Thursday" temperature="60" condition="cloudy" />
    <Divider />
    <Forecast name="Friday" temperature="52" condition="rain" />
    <Divider />
    <Forecast name="Saturday" temperature="48" condition="snow" />
    <Divider />
    <Forecast name="Sunday" temperature="55" condition="sunny" /> 
  </Stack>);
}

export default Week;
