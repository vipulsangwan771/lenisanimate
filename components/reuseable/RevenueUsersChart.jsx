"use client";

import Image from "next/image";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { month: "Jan", revenue: 2000, users: 400 },
  { month: "Feb", revenue: 5000, users: 800 },
  { month: "Mar", revenue: 4000, users: 1200 },
  { month: "Apr", revenue: 6500, users: 1700 },
  { month: "May", revenue: 8000, users: 2200 },
  { month: "Jun", revenue: 7000, users: 2100 },
];
export default function RevenueUsersChart() {
  const [type, setType] = useState("revenue");

  return (
    <div className="w-full  grid grid-cols-1">
      {/* Toggle Buttons */}
      <div className="flex justify-center flex-col md:flex-row md:justify-between items-center gap-3 mb-4">
        <div className="text-center md:text-left">
          <p className="md:text-3xl text-lg">Performance Analytics</p>
          <p className="text-white/60 text-xs">Real-Time market insights</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          {["revenue", "users"].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`px-4 py-2 flex items-center gap-1 rounded text-sm font-medium transition 
              ${
                type === item
                  ? "bg-[#27E3E4] text-black  hover:bg-[#CECFD1]"
                  : "bg-white/10 text-white cursor-pointer"
              }`}
            >
              {item === "revenue" ? (
                <>
                  <Image
                    src="/images/ref3.png"
                    alt="use"
                    width={15}
                    height={15}
                  />
                  Revenue
                </>
              ) : (
                <>
                  <Image
                    src="/images/use.png"
                    alt="use"
                    width={15}
                    height={15}
                  />{" "}
                  Users
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full  min-h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />

            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis
              stroke="#aaa"
              domain={[0, 10000]}
              ticks={[0, 2500, 5000, 7500, 10000]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />

            {/* ✅ FILLED AREA */}
            <Area
              type="monotone"
              dataKey={type}
              baseValue={0}
              fill="#27E3E4"
              fillOpacity={0.25}
              stroke="none"
            />

            {/* ✅ LINE */}
            <Line
              type="monotone"
              dataKey={type}
              stroke="#27E3E4"
              strokeWidth={3}
              dot={false}
              filter="url(#glow)" // optional glow
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
