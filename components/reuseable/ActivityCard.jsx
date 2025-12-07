"use client";
import React from "react";

const ActivityCard = ({
  username,
  actionText,
  amount,
  time,
  dotColor = "bg-green-500",
}) => {
  return (
    <div className="mt-4 bg-(--seconday-bg) rounded-lg p-4">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 ${dotColor} rounded-full`} />
          <div>
            <p className="text-[15px]">{username}</p>
            <p className="text-white/60 text-[12px]">
              {actionText}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-(--primary-green) text-[15px]">
            {amount}
          </p>
          <p className="text-white/60 text-[12px]">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
