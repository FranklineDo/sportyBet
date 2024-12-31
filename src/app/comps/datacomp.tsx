"use client";

import React, { useState } from "react";
import Image from "next/image";
import Data from "./data";

const BetHistory: React.FC = () => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragStartX, setDragStartX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    setDraggedIndex(index);
    setDragStartX(e.touches[0].clientX); // Capture the initial touch position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (draggedIndex !== null) {
      const touchX = e.touches[0].clientX;
      const distance = touchX - dragStartX;

      const draggableItem = document.getElementById(`item-${draggedIndex}`);
      if (draggableItem) {
        draggableItem.style.transform = `translateX(${distance}px)`; // Move the item
      }
    }
  };

  const handleTouchEnd = () => {
    if (draggedIndex !== null) {
      const draggableItem = document.getElementById(`item-${draggedIndex}`);
      if (draggableItem) {
        draggableItem.style.transition = "transform 0.3s ease-out"; // Add smooth return
        draggableItem.style.transform = "translateX(0px)"; // Reset position
      }
    }
    setDraggedIndex(null); // Reset state
    setDragStartX(0);
  };

  const data = Data.map((data, index) => (
    <div
      className="relative overflow-hidden"
      key={data.day}
      id={`item-${index}`}
      onTouchStart={(e) => handleTouchStart(e, index)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: "grab" }}
    >
      {/* Sliding Content */}
      <div className=" bg-red-700">
      <div className="relative flex items-center bg-customBg">
        <h3 className="size-10 mr-1 font-medium text-zinc-400 pt-5 pl-4">
          <p>{data.day}</p>
          <p className="text-xs">{data.month}</p>
        </h3>

        <div className="p-3 pl-6 rounded-md mb-4 pr-0">
          <div className="p-2 rounded-md mb-3">
            <div className="flex justify-between text-sm">
              {data.win ? (
                <Image
                  src="/multiplewin.jpg"
                  width={1000}
                  height={1000}
                  alt="win"
                />
              ) : (
                <Image
                  src="/multiplelosejpg.jpg"
                  width={1000}
                  height={1000}
                  alt="lose"
                />
              )}
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span className="text-xs">Total Stake(NGN)</span>
              <span className="text-white text-xs font-semibold">
                {data.stake}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span className="text-xs">Total Return</span>
              <span
                className={
                  data.win
                    ? "text-greencolor font-sans -mt-2 font-semibold text-lg"
                    : "text-gray-400 font-sans font-semibold text-xs"
                }
              >
                {data.return}
              </span>
            </div>
            <hr className="mb-2 mt-1 border-zinc-700" />
            <h2 className="text-gray-400 text-xs mb-2">{data.Match1}</h2>
            <hr className="mb-2 mt-1 border-zinc-700" />
          </div>
        </div>
        </div>
         </div>
    </div>
  ));

  return (
    <div>
      {data}
      <Image
        src="/more.jpg"
        alt="more"
        width={1000}
        height={1000}
        className="mt-5 ml-0"
      />
    </div>
  );
};

export default BetHistory;
