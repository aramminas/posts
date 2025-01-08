import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../arrow-icon";

export const MobileSubNav = ({ routes }) => {
  return (
    <ul className="mobile-sub-nav">
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
