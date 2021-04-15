export default function Stack({
  direction = "column",
  center = false,
  flex,
  style = {},
  children,
}) {
  style.display = "flex";
  style.flexDirection = direction;

  if (center) {
    style.justifyContent = "center";
    style.alignItems = "center";
  }

  if (flex) {
    style.flex = 1;
  }

  return <div style={style}>{children}</div>;
}
