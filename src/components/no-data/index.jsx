import { useContext } from "react";

import "./styles.css";
import "../../styles/no-data.css";
import { SearchContext } from "../../context/searchContext";

export const NoData = () => {
  const { setSearch } = useContext(SearchContext);

  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="empty-block ">
      <article className="no-data">
        <p className="title">Empty Result</p>
        <p>
          Nothing was found for your <strong>search</strong>.
        </p>
        <p>
          <button onClick={handleReset}>Reset search result </button>
        </p>
      </article>
    </div>
  );
};
