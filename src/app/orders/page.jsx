"use client";
import TransactionCard from "@/components/reuseable/TransactionCard ";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FcUnlock } from "react-icons/fc";
import { IoIosLock } from "react-icons/io";

import { PiShoppingCartSimpleFill } from "react-icons/pi";

const OrderPage = () => {
  const [buttonLoading, setButtonLoading] = useState(true);
  // INITIAL PAGE LOADING – show spinner for 1 seconds
  useEffect(() => {
    const timer = setTimeout(() => setButtonLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  // BUTTON CLICK HANDLER – spinner spins 3–4 times (~1s)
  const handleButtonClick = () => {
    setButtonLoading(true);

    setTimeout(() => {
      setButtonLoading(false);
    }, 1000); // spinner duration
  };
  const cards = [
    {
      img: "/images/diamond.png",
      title: "0 $TAPZI",
      value: "$0.00",
      desc: "Total Holdings",
      textColor: "text-[#27E3E4]",
      hoverShadow: "hover:shadow-[0_0_10px_#27E3E4]",
    },
    {
      img: "/images/yellowlock.png",
      title: "0 $TAPZI",
      value: "Ready to use",
      desc: "Available",
      textColor: "text-[#FFD700]",
      hoverShadow: "hover:shadow-[0_0_10px_#FFD700]",
    },
    {
      img: "/images/bluelock.png",
      title: "0 $TAPZI",
      value: "In vesting",
      desc: "Locked",
      textColor: "text-[#3191FF]",
      hoverShadow: "hover:shadow-[0_0_10px_#3191FF]",
    },
    {
      img: "/images/hourglass.png",
      title: "0",
      value: "Processing",
      desc: "Pending",
      textColor: "text-[#CD7F32]",
      hoverShadow: "hover:shadow-[0_0_10px_#CD7F32]",
    },
  ];
  const vestingCards = [
    {
      title: "Presale Tokens",
      subtitle: "3 months vesting",
      tge: "25% at TGE",
      unlocked: 75,
      gradient: "from-[#92F853] to-[#0095FF]",
    },
    {
      title: "Staking Rewards",
      subtitle: " 6 months vesting",
      tge: "10% monthly",
      unlocked: 40,
      gradient: "from-[#9231FA] to-[#3C46FF]",
    },
    {
      title: "Referral Bonus",
      subtitle: "1 month vesting",
      tge: "100% at TGE",
      unlocked: 100,
      gradient: "from-[#FFBF35] to-[#51FF00]",
    },
    {
      title: "Liquidity Pool",
      subtitle: "12 months vesting",
      tge: "8.33% monthly",
      unlocked: 25,
      gradient: "from-[#FF5930] to-[#FFEA00]",
    },
  ];

  return (
    <>
      <div className="bg-(--primary-bg) min-h-screen w-full pt-5 text-white">
        <div className="pb-4 px-5 text-xl border-b border-gray-700 text-center">
          Portfolio Overview
        </div>

        <div className="m-5 p-5 text-2xl bg-(--primary-card-bg) border border-(--primary-border) rounded-lg">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`text-center bg-(--primary-bg) border border-(--primary-border) 
                rounded-lg p-5 transition-all duration-300 ${card.hoverShadow}`}
              >
                <div className="inline-block bg-[#121F40] rounded-full p-2 mb-2">
                  <Image
                    src={card.img}
                    alt="icon"
                    width={25}
                    height={25}
                    className="px-1"
                  />
                </div>

                <div className={`${card.textColor} font-bold`}>
                  {card.title}
                </div>

                <div className="text-white/60 text-sm">{card.value}</div>

                <div className="text-white text-md">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 p-5">
          <div className="lg:w-[60%] w-full">
            <div className="flex items-center justify-between gap-3">
              <p className="text-2xl">Recent Transactions</p>
              <div className="">
                <button
                  onClick={handleButtonClick}
                  className="border cursor-pointer border-[#4AFF6B] rounded text-[#4AFF6B] bg-[#041921] px-4 py-2 flex items-center gap-2"
                >
                  {buttonLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#4AFF6B]/40 border-t-[#4AFF6B] rounded-full spin-3x"></div>
                      LIVE UPDATES
                    </>
                  ) : (
                    "LIVE UPDATES"
                  )}
                </button>
              </div>
            </div>

            <TransactionCard
              icon={PiShoppingCartSimpleFill}
              iconColor="#00FFE1"
              title="Buy"
              txnId="TXN001"
              buttonText="Completed"
              buttonColor="#4AFF6B"
              buttonBorder="#4AFF6B"
              amount="10,000 $TAPZI"
              value="$35.00"
              date="2024-01-15 14:32"
              fee="$0.45"
            />
            <TransactionCard
              img="/images/bluelock.png"
              title="Stake"
              txnId="TXN001"
              buttonText="Pending"
              buttonColor="#FFB936"
              buttonBorder="#FFB936"
              amount="10,000 $TAPZI"
              value="$35.00"
              date="2024-01-15 14:32"
              fee="$0.45"
            />
            <TransactionCard
              img="/images/transf.png"
              title="Transfer"
              txnId="TXN001"
              buttonText="Completed"
              buttonColor="#4AFF6B"
              buttonBorder="#4AFF6B"
              amount="10,000 $TAPZI"
              value="$35.00"
              date="2024-01-15 14:32"
              fee="$0.45"
            />
            <TransactionCard
              img="/images/yellowlock.png"
              title="Unstake"
              txnId="TXN001"
              buttonText="Failed"
              buttonColor="#FF2525"
              buttonBorder="#FF2525"
              amount="10,000 $TAPZI"
              value="$35.00"
              date="2024-01-15 14:32"
              fee="$0.45"
            />
          </div>
          <div className="lg:w-[40%] lg:h-[630px] w-full xl:h-[530px] h-[530px] p-5 text-2xl bg-(--primary-card-bg) border border-(--primary-border) rounded-lg">
            <div className="flex items-center gap-2 justify-between">
              <p className="text-2xl">Vesting Schedule</p>
              <button className="border border-[#4AFF6B] rounded text-[#4AFF6B] bg-[#041921] px-4 text-xl py-2 flex gap-2">
                <Image
                  src="/images/flame.png"
                  alt="flame"
                  width={20}
                  height={20}
                />
                LIVE
              </button>
            </div>
            {vestingCards.map((item, index) => (
              <div
                key={index}
                className="mt-5 bg-(--seconday-bg) border border-(--seconday-bg) rounded-lg px-5 py-3"
              >
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.tge}</p>
                </div>

                <div className="flex items-center gap-2 justify-between">
                  <p className="text-sm text-white/60 font-semibold">
                    {item.subtitle}
                  </p>
                  <p className=" text-(--primary-green) text-sm">
                    {item.unlocked}% Unlocked
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full mt-4">
                  <div className="bg-gray-700/40 w-full h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-700`}
                      style={{ width: `${item.unlocked}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
