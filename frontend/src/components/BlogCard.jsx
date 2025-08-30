import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  // Function to strip HTML tags for preview text
  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Get plain text content for preview
  const previewText = stripHtml(blog.content);
  const displayText =
    previewText.length > 120
      ? previewText.substring(0, 120) + "..."
      : previewText;

  return (
    <Link
      to={`/blog/${blog._id}`} 
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm 
                 hover:bg-gray-100 transition dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{displayText}</p>
      <div className="text-sm text-gray-500 flex justify-between items-center mt-4">
        <span>
          By <strong>{blog.author?.name}</strong>
        </span>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
