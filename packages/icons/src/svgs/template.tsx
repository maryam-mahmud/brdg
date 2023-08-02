import React from "react";

export const Template: React.FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18.667L28 18.6681"
        strokeWidth="1.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 28L12 18.6667"
        strokeWidth="1.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="6"
        strokeWidth="1.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Template;
