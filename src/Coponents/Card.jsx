import React from "react";

const Card = ({ article }) => (
  <a
    href={article?.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="border rounded-lg w-80 m-2 p-4 bg-white shadow hover:shadow-lg transition cursor-pointer flex flex-col">
      {article?.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h2 className="font-bold text-lg mt-3">{article?.title}</h2>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {article?.description}
      </p>
      {article?.author && (
        <p className="text-xs text-gray-400 mt-2">Author: {article.author}</p>
      )}
      {article?.source?.name && (
        <p className="text-xs text-gray-400 mt-1">Source: {article.source.name}</p>
      )}
    </div>
  </a>
);

export default Card;
