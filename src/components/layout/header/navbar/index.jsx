import { Link } from "react-router-dom";

import { SubNavbar } from "./sub-navbar";
import { routes } from "../../../../constants";
import { ArrowIcon } from "../../../arrow-icon";
import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="app-nav-bar container">
      <ul className="navbar navbar-list">
        {routes.map((route) => {
          const subRoutes = route.subRoutes;
          return (
            <li key={route.key} className="navbar-item">
              <Link to={route.path}>
                {route.name} {!!subRoutes?.length && <ArrowIcon />}
              </Link>
              {!!subRoutes?.length && <SubNavbar routes={subRoutes} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
