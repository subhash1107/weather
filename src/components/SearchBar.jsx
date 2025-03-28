import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("delhi");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 w-2/3 md:w-1/3 border border-gray-300 rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
