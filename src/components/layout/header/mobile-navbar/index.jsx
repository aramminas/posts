import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../logo";
import { routes } from "../../../../constants";
import { MobileSubNav } from "./mobile-sub-nav";
import { ArrowIcon } from "../../../arrow-icon";
import menuIcon from "../../../../assets/icons/menu.png";
import crossIcon from "../../../../assets/icons/cross.png";
import "./styles.css";

export const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <nav className="header-aside">
      <button className="menu-btn mobile-btn" onClick={() => setOpen(true)}>
        <img src={menuIcon} alt="open menu" />
      </button>
      <div
        className={`mobile-sidenav ${isOpen ? "show" : ""}`}
        onClick={handleClick}
      >
        <div className="sidenav-header">
          <Logo />
          <button className="menu-btn close-btn" onClick={() => setOpen(false)}>
            <img src={crossIcon} alt="close menu" />
          </button>
        </div>
        <ul className="sidenav-content navbar-list">
          {routes.map((route) => {
            const subRoutes = route.subRoutes;
            return (
              <li key={route.key}>
                <Link to={route.path}>
                  {route.name} {!!subRoutes?.length && <ArrowIcon />}
                </Link>
                {!!subRoutes?.length && <MobileSubNav routes={subRoutes} />}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`mobile-menu-backdrop ${isOpen ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
};
