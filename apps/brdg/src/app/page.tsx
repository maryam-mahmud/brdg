import { Metadata } from "next";
import Bridge from "../components/bridge";

export const metadata: Metadata = {
  title: "Bride",
};

export default function Page() {
  return (
    <>
      <Bridge />
    </>
  );
}
