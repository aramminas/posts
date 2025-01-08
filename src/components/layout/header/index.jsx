import { useEffect, useState } from "react";

import { NavBar } from "./navbar";
import { HeaderTop } from "./header-top";
import { scrollStartPosition } from "../../../constants";
import "./styles.css";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > scrollStartPosition &&
        window.scrollY > lastScrollY
      ) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`app-header ${!isVisible ? "hide" : ""} `}>
      <div className="header-item-wrapper">
        <HeaderTop />
      </div>
      <div className="header-item-wrapper">
        <NavBar />
      </div>
    </header>
  );
};
