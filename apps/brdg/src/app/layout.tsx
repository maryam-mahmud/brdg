import { Urbanist } from "next/font/google";

import "../styles/globals.css";
import Navbar from "../components/navbar";
import { Provider } from "../components/context/provider";

const urbanist = Urbanist({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.className}>
      <body
        suppressHydrationWarning={true}
        className="w-full overflow-hidden bg-brown-50"
      >
       <Provider>
        <div className="flex flex-col w-full h-screen">
            <Navbar />
            <div className="w-full h-screen">{children}</div>
          </div>
       </Provider>
      </body>
    </html>
  );
}
