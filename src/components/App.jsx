import Stack from "./Stack";
import Today from "./Today";
import Week from "./Week";
import Place from "./Place";
import ChangeTheme from "./ChangeTheme";
import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Divider from "./Divider";
import useLocation from "../hooks/useLocation";
import useForecast from "../hooks/useForecast";

function App() {
  const { theme } = useContext(ThemeContext);
  const [location, locationError] = useLocation();
  const [forecast, forecastError] = useForecast(location);

  locationError && console.log("location error", locationError);
  forecastError && console.log("location error", forecastError);

  if (!forecast) return <p>Loading</p>;

  return (
    <Stack style={{ ...theme, height: "100%", padding: "1rem" }}>
      <ChangeTheme />
      <Place place={forecast.place} />
      <Divider />
      <Today forecast={forecast.periods[0]} />
      <Divider />
      <Week forecasts={forecast.periods.slice(1)} />
    </Stack>
  );
}

export default App;
