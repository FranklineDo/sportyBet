"use client";

import React, { useState } from "react";
import Image from "next/image";
import Data from "./data";

const BetHistory: React.FC = () => {
  const [dragged, setDragged] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setActiveIndex(index);
    setDragged(e.clientX); // Set the starting position
  };

  const handleDrag = (e: React.DragEvent) => {
    if (activeIndex !== null) {
      const distance = e.clientX - dragged;
      const draggableItem = document.getElementById(`item-${activeIndex}`);
      if (draggableItem) {
        draggableItem.style.transform = `translateX(${Math.min(0, distance)}px)`;
      }
    }
  };

  const handleDragEnd = () => {
    if (activeIndex !== null) {
      const draggableItem = document.getElementById(`item-${activeIndex}`);
      if (draggableItem) {
        draggableItem.style.transform = "translateX(0)"; // Reset position
        draggableItem.style.transition = "transform 0.3s ease-out"; // Smooth return
      }
    }
    setDragged(0);
    setActiveIndex(null);
  };

  const data = Data.map((data, index) => (
    <div
      className="relative overflow-hidden"
      key={data.day}
      draggable
      id={`item-${index}`}
      onDragStart={(e) => handleDragStart(e, index)}
      onDrag={(e) => handleDrag(e)}
      onDragEnd={handleDragEnd}
    >
      {/* Red Background */}
      <div className="absolute top-0 left-0 h-full w-full bg-red-500"></div>

      {/* Sliding Content */}
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
  ));

  return (
    <div>
      {data}
      <Image
        src="/more.jpg"
        alt="more"
        width={1000}
        height={100}
        className="mt-5 ml-0"
      />
    </div>
  );
};

export default BetHistory;
