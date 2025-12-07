"use client";
import React, { useState } from "react";

const RoiPage = () => {
  const [activeTab, setActiveTab] = useState("coin"); // default active
  const [coinValue, setCoinValue] = useState(0);
  const min = 10;
  const max = 100;

  return (
    <div className="bg-(--primary-bg) min-h-screen w-full p-5 pt-10 text-white">
      {/* Tabs */}
      <div
        className="flex gap-1 justify-between md:max-w-[435] mx-[auto] border bg-(--primary-card-bg) rounded-lg 
      border-(--primary-border) mb-5 p-1"
      >
        <button
          onClick={() => setActiveTab("coin")}
          className={`md:px-4 px-1 py-2 md:text-base text-sm  w-full font-semibold ${
            activeTab === "coin"
              ? "border-[#27E3E4] bg-[#27E3E4] p-3 text-[#07012A] rounded-lg"
              : "border-transparent text-white/70 hover:text-white cursor-pointer"
          } transition-colors duration-300`}
        >
          Coin Amount Calculator
        </button>
        <button
          onClick={() => setActiveTab("profit")}
          className={`md:px-4 px-1 py-2 w-full  md:text-base text-sm font-semibold ${
            activeTab === "profit"
              ? "border-[#27E3E4] bg-[#27E3E4] p-3 text-[#07012A] rounded-lg"
              : "border-transparent text-white/70 hover:text-white  cursor-pointer"
          } transition-colors duration-300`}
        >
          Mini Profit Calculator
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-(--primary-card-bg) p-6 rounded-lg max-w-[1000px] mx-[auto]  border-(--primary-border) border">
        {activeTab === "coin" && (
          <div>
            <h2 className="md:text-2xl text-base mb-3 text-center">
              Calculate your profits on coin launch
            </h2>
            <div className="flex w-full flex-col lg:flex-row gap-3 items-center justify-between">
              <div className="w-full">
                <p className="opacity-[70%] md:text-base text-sm">
                  Enter how much $TAPZI coins you have
                </p>
                <div className="mt-3">
                  <input
                    type="number"
                    placeholder="$TAPZI"
                    className="px-3 w-full py-3 border border-(--primary-border) rounded-lg focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--primary-border)" }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="opacity-[70%]  md:text-base text-sm">
                  USD Amount{" "}
                </p>
                <div className="mt-3 w-full">
                  <input
                    type="number"
                    placeholder="$0.03"
                    className="px-3 py-3 w-full border border-(--primary-border) rounded-lg focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--primary-border)" }}
                  />
                </div>
              </div>
            </div>

            <p className="text-center my-5 md:text-base text-xs">
              Move the slider to see how much your $TAPZI will be worth at
              different price targets!
            </p>

            <div className="flex flex-col items-center px-3 md:px-0">
              <input
                type="range"
                min="10"
                max="100"
                step="1"
                value={coinValue}
                onChange={(e) => setCoinValue(e.target.value)}
                className="w-full rotate-180 md:w-3/4 h-3  rounded-lg appearance-none cursor-pointer accent-[#27E3E4]
                 transition-all"
                style={{
                  background: `linear-gradient(to right, #3C46FF 0%, #42FA31 ${
                    ((coinValue - min) / (max - min)) * 100
                  }%, #424242 ${
                    ((coinValue - min) / (max - min)) * 100
                  }%, #424242 100%)`,
                }}
              />
              <div className="flex w-full md:max-w-[320px] lg:max-w-[500px] xl:max-w-[800px] max-w-[800px] mx-auto items-center gap-2 justify-between">
                <p>${coinValue}</p> <p>$0</p>
              </div>
            </div>
            <div className="mt-5  text-center">
              <div className="flex inline-block border border-(--primary-border) p-4 rounded-full md:rounded-lg bg-(--primary-card-bg)">
                <span className="md:text-4xl font-extrabold text-[#27E3E4] leading-tight ">
                  <span className="text-base font-medium text-white/70 ml-1">
                    Stage
                  </span>
                  30
                  <span className="text-base font-medium text-white/70 ml-1">
                    Price
                  </span>
                  ${(0.22 * coinValue).toFixed(2)}
                  <span className="text-base font-medium text-white/70 ml-1">
                    $TAPZI
                  </span>
                </span>
              </div>
            </div>

            <div className="my-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#4AFF6B] bg-[#011F0A] p-4">
                <span className="opacity-[70%] text-[8px] md:text-sm">
                  Potential Value
                </span>
                <p className="text-[#4AFF6B] text-base md:text-xl">$6.60</p>
              </div>
              <div className="rounded-lg border border-[#46ECFF] bg-[#01373D] p-4">
                <span className="opacity-[70%]  text-[8px] md:text-sm">
                  Profit
                </span>
                <p className="text-[#4AFF6B]  text-base md:">$6.60</p>
              </div>
              <div className="rounded-lg border border-[#FFDC51] bg-[#241C00] p-4">
                <span className="opacity-[70%]  text-[8px] md:text-sm">
                  ROI
                </span>
                <p className="text-[#4AFF6B]  text-base md:">$0.00</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "profit" && (
          <div>
            <h2 className="text-2xl mb-3 text-center">
              Mini Profit Calculator
            </h2>
            <div className="flex w-full flex-col lg:flex-row gap-3 items-center justify-between">
              <div className="w-full">
                <p className="opacity-[70%]" style={{ fontSize: "15px" }}>
                  Enter how much $TAPZI coins you have
                </p>
                <div className="mt-3">
                  <input
                    type="number"
                    placeholder="$TAPZI"
                    className="px-3 w-full py-3 border border-(--primary-border) rounded-lg focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--primary-border)" }}
                  />
                </div>
              </div>

              <div className="w-full">
                <p className="opacity-[70%]" style={{ fontSize: "15px" }}>
                  USD Amount{" "}
                </p>
                <div className="mt-3 w-full">
                  <input
                    type="number"
                    placeholder="$0.03"
                    className="px-3 py-3 w-full border border-(--primary-border) rounded-lg focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "var(--primary-border)" }}
                  />
                </div>
              </div>
            </div>

            <p className="text-center my-5">
              Move the slider to see how much your $TAPZI will be worth at
              different price targets!
            </p>

            <div className="flex flex-col items-center px-3 md:px-0">
              <input
                type="range"
                min="10"
                max="100"
                step="1"
                value={coinValue}
                onChange={(e) => setCoinValue(e.target.value)}
                className="w-full rotate-180 md:w-3/4 h-3  rounded-lg appearance-none cursor-pointer accent-[#27E3E4]
                 transition-all"
                style={{
                  background: `linear-gradient(to right, #3C46FF 0%, #42FA31 ${
                    ((coinValue - min) / (max - min)) * 100
                  }%, #424242 ${
                    ((coinValue - min) / (max - min)) * 100
                  }%, #424242 100%)`,
                }}
              />
              <div className="flex w-full md:max-w-[320px] lg:max-w-[500px] xl:max-w-[800px] max-w-[800px] mx-auto items-center gap-2 justify-between">
                <p>${coinValue}</p> <p>$0</p>
              </div>
            </div>
            <div className="mt-5  text-center">
              <div className="flex inline-block border border-(--primary-border) p-4 rounded-lg bg-(--primary-card-bg)">
                <div className="mt-1 flex flex-col items-center">
                  <span className="md:text-4xl font-extrabold text-[#27E3E4] leading-tight ">
                    <span className="text-base font-medium text-white/70 ml-1">
                      Stage
                    </span>
                    30
                    <span className="text-base font-medium text-white/70 ml-1">
                      Price
                    </span>
                    ${(0.22 * coinValue).toFixed(2)}
                    <span className="text-base font-medium text-white/70 ml-1">
                      $TAPZI
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="my-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#4AFF6B] bg-[#011F0A] p-4">
                <span className="opacity-[70%]" style={{ fontSize: "12px" }}>
                  Potential Value
                </span>
                <p className="text-[#4AFF6B] text-xl">$6.60</p>
              </div>
              <div className="rounded-lg border border-[#46ECFF] bg-[#01373D] p-4">
                <span className="opacity-[70%]" style={{ fontSize: "12px" }}>
                  Profit
                </span>
                <p className="text-[#4AFF6B] text-xl">$6.60</p>
              </div>
              <div className="rounded-lg border border-[#FFDC51] bg-[#241C00] p-4">
                <span className="opacity-[70%]" style={{ fontSize: "12px" }}>
                  {" "}
                  ROI
                </span>
                <p className="text-[#4AFF6B] text-xl">$0.00</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoiPage;
