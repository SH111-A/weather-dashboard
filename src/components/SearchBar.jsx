import { useState, useEffect } from "react";

export default function SearchBar({ value, onChange, onSearch }) {
  const [local, setLocal] = useState("");

  useEffect(() => {
    setLocal(value || "");
  }, [value]);

  return (
    <form
      className="searchBar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(local); 
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Search city..."
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
          onChange(e.target.value); 
        }}
      />

      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
