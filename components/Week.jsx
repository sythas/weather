import Stack from "./Stack";
import Forecast from "./Forecast";
import Divider from "./Divider";

function Week({ forecasts }) {
  return (
    <Stack direction="row">
      {forecasts &&
        forecasts.map((forecast, i) => [
          <Forecast key={`forecast-#{i}`} forecast={forecast} />,
          <Divider key={`divider-#{i}`} hide={forecasts.length === i + 1} />,
        ])}
    </Stack>
  );
}

export default Week;
