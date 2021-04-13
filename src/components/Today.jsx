import Stack from "./Stack";
import Forecast from "./Forecast";
import Clock from "./Clock";
import Divider from "./Divider";

function Today(props) {
  return (
    <Stack direction="row">
      <Forecast {...props} fontSize="8rem" />
      <Divider vertical />
      <Clock />
    </Stack>
  );
}

export default Today;
