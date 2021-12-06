import { Link } from "react-router-dom";
import "./linkTag.scss";

const LinkTag = ({ to, label, externalLink, ...rest }) => {
  return (
    <Link
      className="linkTag"
      to={externalLink ? { pathname: externalLink } : to}
      target={externalLink ? "_blank" : "_self"}
      {...rest}
    >
      {label}
    </Link>
  );
};
export default LinkTag;
