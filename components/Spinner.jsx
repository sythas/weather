import { useContext } from "react";
import { ThemeContext } from "./Theme";
import MoonLoader from "react-spinners/MoonLoader";
import Stack from "./Stack";
import Text from "./Text";

const Spinner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack center style={{ ...theme, height: "100%" }}>
      <Text>If it's not ready in a yet,</Text>
      <Text>just wait longer...</Text>
      <MoonLoader />
    </Stack>
  );
};

export default Spinner;
