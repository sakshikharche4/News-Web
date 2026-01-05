import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!input.trim()) {
      setResult([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&apiKey=7912e5277f974321b02406e982016dba`
        );
        const data = await res.json();
        setResult(data.articles || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="relative w-72">
      {/* Search Input */}
      <div className="flex items-center gap-2 px-3 py-2 border rounded-lg">
        <CiSearch className="size-5" />
        <input
          type="text"
          placeholder="Search News..."
          className="outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Results */}
      {input && (
        <div className="absolute top-12 left-0 w-full bg-white border rounded-lg max-h-64 overflow-y-auto shadow-md z-10">
          {loading && (
            <p className="p-3 text-sm text-gray-500">Searching...</p>
          )}

          {!loading && result.length === 0 && (
            <p className="p-3 text-sm text-gray-500">No results found</p>
          )}

          {!loading &&
            result.map((article, index) => (
              <div
                key={index}
                className="p-3 border-b last:border-none hover:bg-gray-100 cursor-pointer"
              >
                <p className="text-sm font-medium line-clamp-2">
                  {article.title}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
