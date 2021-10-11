import { Link } from "react-router-dom";
import "./socialIcons.scss";

const SocialIcons = ({ children, to }) => {
  return (
    <Link
      to={to ? { pathname: to } : "/"}
      target={to ? "_blank" : "_self"}
      className="socialIcons"
    >
      {children}
    </Link>
  );
};

export default SocialIcons;
