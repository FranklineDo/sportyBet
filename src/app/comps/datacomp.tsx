// pages/index.tsx
import React from "react";
import Image from "next/image";
import Data from './data'

const BetHistory: React.FC = () => {
  const data = Data.map(data => {
    return (
    
          <div className=' -mb-16 flex bg-customBg' key={data.day}>
            <h3 className=" size-10 mr-1 font-medium text-zinc-400 pt-5 pl-4">
              <p>{data.day}</p>
              <p className=" text-xs">{data.month}</p>
            </h3>
        
            <div className=" p-3 rounded-md mb-4 pr-0">
              <div className="p-2 rounded-md mb-3">
                <div className="flex justify-between text-sm">
              {data.win ? (<Image src='/multiplewin.jpg' width={1000} height={1000} alt="kk" />) : (<Image src='/multiplelosejpg.jpg' width={1000} height={1000} alt="kk" />)}
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span className=" text-xs">Total Stake(NGN)</span>
                  <span className=" text-white text-xs font-semibold">{ data.stake}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span className=" text-xs">Total Return</span>
                  <span className={ data.win? "text-greencolor font-sans -mt-2 font-semibold text-lg":" text-gray-400 font-sans font-semibold text-xs"}>{ data.return}</span>
                </div>
                <hr className=" mb-2 mt-1 border-zinc-700" />
                <h2 className="text-gray-400 text-xs mb-2">{data.Match1 }</h2>
                <h2 className="text-gray-400 text-xs mb-2">{ data.Match2}</h2>
                <hr className=" mb-2 mt-1 border-zinc-700" />
              </div>
            </div>
          </div>

    );
  }    
)
    return (
      <div>
        {data}
        <Image src='/more.jpg' alt="wee" width={1000} height={1000} className=" mt-5"/>
      </div>
    )
};
  
export default BetHistory;
