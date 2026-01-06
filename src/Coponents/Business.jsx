import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Business = () => {
  const [data, setData] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_API_KEY";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result.articles || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-slate-300 min-h-screen w-full p-6 flex flex-wrap justify-center gap-6">
        {data.length > 0 ? (
          data.map((item, index) => <Card key={index} article={item} />)
        ) : (
          <p className="text-gray-700 text-lg">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Business;
