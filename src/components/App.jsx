import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Stack from "./Stack";
import Today from "./Today";
import Week from "./Week";
import Place from "./Place";
import ChangeTheme from "./ChangeTheme";
import Divider from "./Divider";
import Spinner from "./Spinner";
import Alert from "./Alert";
import useLocation from "../hooks/useLocation";
import useForecast from "../hooks/useForecast";

function App() {
  const { theme } = useContext(ThemeContext);
  const [location, locationError] = useLocation();
  const [forecast, forecastError] = useForecast(location);

  const error = [locationError, forecastError].filter((str) => str).join(", ");

  if (!forecast) return <Spinner />;
  return (
    <Stack style={{ ...theme, height: "100%", padding: "1rem" }}>
      {error && <Alert>{error}</Alert>}
      <ChangeTheme />
      <Place place={forecast.place} />
      <Divider />
      <Today forecast={forecast.current} />
      <Divider />
      <Week forecasts={forecast.periods} />
    </Stack>
  );
}

export default App;
