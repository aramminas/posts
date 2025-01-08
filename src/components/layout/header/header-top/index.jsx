import { Logo } from "../logo";
import { SearchForm } from "../search-form";
import { MobileNavbar } from "../mobile-navbar";
import "./styles.css";

export const HeaderTop = () => {
  return (
    <div className="top-section container">
      <MobileNavbar />
      <Logo />
      <SearchForm />
    </div>
  );
};
