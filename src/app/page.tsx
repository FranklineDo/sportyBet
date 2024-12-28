// pages/index.tsx
import React from "react";
import Image from "next/image";
import BetHistory from "./comps/datacomp";

const staticbet: React.FC = () => {
  
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="max-w-sm mx-auto p-4 -pr-2 ">
        {/* Tab Navigation */}
        <Image src='/sportyheader.jpg' alt="head" width={1000} height={1000} className="sticky top-0" />

          <BetHistory />

        <Image src='/sportyfooter.jpg' alt="ok" width={1000} height={1000} className="sticky mt-5 bottom-2" />
      </div>
    </div>
  );
};
  
export default staticbet;
