import React from "react";

export const Sticker: React.FC = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.98 28C9.367 27.993 4.007 22.624 4 16c.472.133.96.202 1.45.203a4.921 4.921 0 004.073-2.109A4.369 4.369 0 009.99 10c.344.061.693.093 1.043.094A5.109 5.109 0 0015.04 8.2 5 5 0 0016.058 4C22.675 4.022 28.021 9.412 28 16.039c-.022 6.627-5.403 11.982-12.02 11.96z"
        strokeWidth={1.5}
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 22.666h.003v.003h-.003v-.003zM20 20h.003v.003H20V20zM14.667 16h.002v.003h-.002V16zM21.333 13.334h.003v.002h-.003v-.002zM4 9.334h.003v.002H4v-.002zM10.667 4h.002v.003h-.002V4zM5.333 4h.003v.003h-.003V4z"
        strokeWidth={1.5}
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sticker;
