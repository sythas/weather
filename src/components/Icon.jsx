export default function Icon({ icon, alt }) {
  return (
    <img
      style={{ width: 86, height: 86 }}
      alt={alt}
      src={icon}
      width="86"
      height="86"
    />
  );
}
