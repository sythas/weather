import sytles from "../styles/Icon.module.css";

export default function Icon({ icon, alt }) {
  return (
    <img className={sytles.icon} alt={alt} src={icon} width="86" height="86" />
  );
}
