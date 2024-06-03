import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";

export default function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUsername(username) {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );

      if (!res.ok) throw new Error("Something went wrong with fetching data");

      const { items } = await res.json();

      setResults(items || []);

      if (items.length === 0) {
        setError("Sorry, couldn't find any user");
      } else {
        setError("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <Header />
      <Form onUsername={handleUsername} isLoading={isLoading} />
      <Results results={results} isLoading={isLoading} error={error} />
    </div>
  );
}
