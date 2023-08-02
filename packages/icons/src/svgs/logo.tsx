import * as React from "react";

export const Logo: React.FC = () => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={40} height={40} rx={11} fill="#1A1C20" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.576 10a1.5 1.5 0 00-3 0v1.577h-1.575a1.5 1.5 0 000 3h1.575v2.346c0 6.351 5.149 11.5 11.5 11.5h2.348V30a1.5 1.5 0 003 0v-1.577h1.575a1.5 1.5 0 100-3h-1.575v-2.346c0-6.351-5.149-11.5-11.5-11.5h-2.348V10zm0 4.577v2.346a8.5 8.5 0 008.5 8.5h2.348v-2.346a8.5 8.5 0 00-8.5-8.5h-2.348z"
        fill="url(#paint0_linear_390_4758)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_390_4758"
          x1={8.50073}
          y1={8.5}
          x2={31.5007}
          y2={31.4985}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF6F5" />
          <stop offset={0.239583} stopColor="#FDDEDB" />
          <stop offset={0.505569} stopColor="#FEB3E3" />
          <stop offset={0.701595} stopColor="#F9B1F5" />
          <stop offset={1} stopColor="#76EDFD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
