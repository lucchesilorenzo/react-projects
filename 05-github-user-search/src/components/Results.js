import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import User from "./User";

export default function Results({ results, isLoading, error }) {
  return (
    <div>
      <h2>Results</h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && results.length > 0 && (
        <div className="results-info">
          {results.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
