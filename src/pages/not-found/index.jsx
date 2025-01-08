import { Link } from "react-router-dom";

import "./styles.css";
import "../../styles/no-data.css";

export const NotFound = () => {
  return (
    <div className="not-found-block no-data">
      <article className="not-found-content">
        <p className="title">Page not found</p>
        <p>
          Looks like the page you were <strong> looking for</strong> is no
          longer here.
        </p>
        <p>
          <button type="button">
            <Link to="/">Go To Home</Link>
          </button>
        </p>
      </article>
    </div>
  );
};
