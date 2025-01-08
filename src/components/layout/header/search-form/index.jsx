import { useContext, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import searchIcon from "../../../../assets/icons/search.png";
import { SearchContext } from "../../../../context/searchContext";
import "./styles.css";

export const SearchForm = () => {
  const formRef = useRef(null);
  const [value, setValue] = useState("");
  const { search, setSearch } = useContext(SearchContext);
  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 600);

  const handleChange = (ev) => {
    debounced(ev.target.value);
  };

  useEffect(() => {
    setSearch(value);
  }, [value]);

  useEffect(() => {
    if (!search) {
      formRef?.current?.reset();
    }
  }, [search]);

  return (
    <form ref={formRef} className="search-form header-aside">
      <input
        name="search"
        placeholder="Search.."
        type="search"
        onChange={handleChange}
      />
      <button>
        <img src={searchIcon} alt="search icom" />
      </button>
    </form>
  );
};
