import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../arrow-icon";

export const SubNavbar = ({ routes }) => {
  return (
    <ul className="sub-navbar">
      {routes.map((route) => {
        return (
          <li key={route.key}>
            <Link to={route.path}>
              {route.name} <ArrowIcon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
