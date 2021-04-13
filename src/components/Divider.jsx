import { useContext } from "react";
import { ThemeContext } from "./Theme";

export default function Divider({ hide }) {
  const { key } = useContext(ThemeContext);

  if (hide) return null;

  let style = {
    border: `1px solid ${key === "light" ? "#ddd" : "#333"}`,
    margin: "1rem",
  };

  return <div style={style} />;
}
