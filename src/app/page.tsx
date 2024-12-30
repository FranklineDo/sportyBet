// pages/index.tsx
import React from "react";
import Image from "next/image";
import BetHistory from "./comps/datacomp";

const staticbet: React.FC = () => {
  
  return (
      <div className="max-w-sm min-h-screen flex flex-col bg-customBg text-white  mx-auto p-4 -pr-2 pb-0  font-sans -mb-2 pt-0" >
        {/* Tab Navigation */}
      <div className=" flex-1">
        <Image src='/sportyheader.jpg' alt="head" width={1000} height={1000} className="sticky top-0" />

          <BetHistory />
</div>
        <Image src='/sportyfooter.jpg' alt="ok" width={1000} height={1000} className="sticky mt-5 bottom-0" />
    </div>
  );
};
  
export default staticbet;
