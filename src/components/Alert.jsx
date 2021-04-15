import Stack from "./Stack";
import Text from "./Text";

const style = {
  backgroundColor: "hsl(0deg 95% 92%)",
  border: "1px solid hsl(0deg 95% 82%)",
  borderRadius: ".5rem",
};

const Alert = ({ children }) => (
  <Stack center style={style}>
    <Text
      style={{
        fontSize: "2rem",
        color: "black",
        backgroundColor: "transparent",
      }}
    >
      Shit... {children}
    </Text>
  </Stack>
);

export default Alert;
