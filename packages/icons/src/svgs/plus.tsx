import React from "react";

export const Plus: React.FC = () => {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7.892v6.105M13.056 10.944H6.945"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M13.905 2.619h-7.81c-2.722 0-4.428 1.926-4.428 4.654v7.358c0 2.728 1.698 4.654 4.428 4.654h7.81c2.73 0 4.428-1.926 4.428-4.654V7.273c0-2.728-1.698-4.654-4.428-4.654z"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
