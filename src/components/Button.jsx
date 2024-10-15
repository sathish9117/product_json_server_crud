import { useEffect, useState } from "react";

function Button({ className, onClick, type, title, closeImg = false }) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`capitalize px-3 py-2 rounded-md bg-primary text-white shadow-md hover:bg-primary hover:text-white hover:shadow-md ${className}`}
      >
        {title}

        {closeImg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default Button;
