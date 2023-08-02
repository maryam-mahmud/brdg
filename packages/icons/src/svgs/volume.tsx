import React from "react";

export const Volume: React.FC = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M2.085 10c-.003 1.025-.048 2.422.586 2.945.591.487 1.007.361 2.087.44 1.08.08 3.36 3.257 5.118 2.252.907-.713.974-2.208.974-5.637 0-3.43-.067-4.924-.974-5.637-1.758-1.005-4.038 2.171-5.118 2.251-1.08.08-1.496-.046-2.087.441-.634.523-.589 1.92-.586 2.945z"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.32 4.92a8.88 8.88 0 010 10.16M14.234 6.929a6.166 6.166 0 010 6.143"
        stroke="currentcolor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Volume;
