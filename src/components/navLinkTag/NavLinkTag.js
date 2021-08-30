import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./navLinkTag.scss";

const NavLinkTag = ({ to, label }) => {
  return (
    <NavLink className="navLinkTag" to={to ? to : "/"}>
      <span className="navLinkTag__label">{label}</span>
      <FiChevronDown className="navLinkTag__arrow" />
    </NavLink>
  );
};

export default NavLinkTag;
