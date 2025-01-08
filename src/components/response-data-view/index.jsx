import { ErrorMessage } from "../error-message";
import { Loader } from "../loader";
import { NoData } from "../no-data";

export const ResponseDataView = ({ children, data, loading, error }) => {
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {data && children}
      {data?.length === 0 && !loading && <NoData />}
    </>
  );
};
