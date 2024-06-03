import { useState, useEffect, useRef } from "react";

export default function Form({ onUsername, isLoading }) {
  const [username, setUsername] = useState("");
  const inputEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (username.trim() === "") return alert("Please fill all fields");

    onUsername(username);
    setUsername("");
  }

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          ref={inputEl}
        />
        <button disabled={isLoading}>Search</button>
      </form>
    </div>
  );
}
