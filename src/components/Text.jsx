import { useContext } from "react";
import { ThemeContext } from "./Theme";

export default function Text({ style, children }) {
  const { theme } = useContext(ThemeContext);

  return <p style={{ ...theme, ...style }}>{children}</p>;
}
