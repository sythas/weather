import { useContext } from "react";
import { ThemeContext } from "../components/Theme";
import Stack from "../components/Stack";
import Today from "../components/Today";
import Week from "../components/Week";
import Place from "../components/Place";
import ChangeTheme from "../components/ChangeTheme";
import Divider from "../components/Divider";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import useLocation from "../hooks/useLocation";
import useForecast from "../hooks/useForecast";
import Link from "next/link";

function App() {
  const { theme } = useContext(ThemeContext);
  const [location, locationError] = useLocation();
  const [forecast, forecastError] = useForecast(location);

  const error = [locationError, forecastError].filter((str) => str).join(", ");

  if (!forecast) return <Spinner />;
  return (
    <Stack style={{ ...theme, height: "100%" }}>
      {error && <Alert>{error}</Alert>}
      <ChangeTheme />
      <Place place={forecast.place} />
      <Divider />
      <Today forecast={forecast.current} />
      <Divider />
      <Week forecasts={forecast.periods} />
      <Link href="/about">
        <a>About</a>
      </Link>
    </Stack>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default App;
