import { Link } from "react-router-dom";
import "./linkTag.scss";

const LinkTag = ({ to, label }) => {
  return (
    <Link className="linkTag" to={to ? to : "/"}>
      {label}
    </Link>
  );
};

export default LinkTag;
