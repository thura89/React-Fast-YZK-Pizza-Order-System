import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={onsubmitHandler}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
};

export default SearchOrder;
