import Stack from "./Stack";
import Icon from "./Icon";
import Text from "./Text";

function Forecast({ forecast, ...rest }) {
  return (
    <Stack flex center>
      <Text fontSize="2rem">{forecast.name}</Text>
      <Stack direction="row" center>
        <Icon icon={forecast.icon} alt={forecast.name} />
        <Text {...rest}>{forecast.temperature}&#176;</Text>
      </Stack>
      <Text fontSize="1rem">{forecast.shortForecast}</Text>
    </Stack>
  );
}

export default Forecast;
