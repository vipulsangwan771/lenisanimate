import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Card 1 (Complex Layout)
const CardRank = () => (
  <div className="w-full lg:w-[40%] p-4 rounded-lg bg-(--primary-card-bg) border border-(--primary-border) hover:shadow-[0_0_20px_#FFDB4E33] transition-shadow duration-300 flex flex-col">
    {/* Header */}
    <div className="flex items-center flex-col md:flex-row justify-between gap-3">
      <div className="flex items-center flex-col md:flex-row gap-3">
        <Image src="/images/crab.png" alt="crab" width={30} height={30} />
        <div>
          <p className="text-[10px]">Your Current Rank</p>
          <h2 className="text-[20px]">
            Crab - <span className="text-(--primary-green)">Level 1</span>
          </h2>
        </div>
      </div>

      {/* Mobile Progress */}
      <div className="w-full bg-gray-700 rounded-full overflow-hidden mt-2 block md:hidden">
        <div
          className="h-2 bg-[#FF7C48] rounded-full"
          style={{ width: "80%" }}
        ></div>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-[14px]">
          Next Rank Turtle <br />
          500.00% to next level
        </p>
        <Image src="/images/tur.png" alt="turtle" width={30} height={30} />
      </div>
    </div>

    {/* Desktop Progress */}
    <div className="w-full bg-gray-700 rounded-full overflow-hidden mt-2 hidden md:block">
      <div
        className="h-2 bg-[#FF7C48] rounded-full"
        style={{ width: "80%" }}
      ></div>
    </div>

    {/* Footer */}
    <div className="mt-5 md:mt-2 flex flex-col-reverse md:flex-row gap-4 justify-between text-center">
      <p className="text-[#2FD9FF] text-[15px]">
        You need 13.53K more $TAPZI coins to level up
      </p>
      <Button asChild>
        <Link href="/buy">BUY NOW</Link>
      </Button>
    </div>
  </div>
);

// Simple Centered Card (Card 2 & 3)
const CardSimple = ({ icon, title, subtitle, hoverShadow }) => (
  <div
    className={`w-full h-full p-4 rounded-lg bg-(--primary-card-bg) border border-(--primary-border)
   hover:shadow-[0_0_20px_var(--shadow-color)] transition-shadow duration-300 flex flex-col justify-center`}
    style={{ "--shadow-color": hoverShadow }}
  >
    <div className="flex items-center justify-center gap-2 px-3">
      <Image src={icon} width={50} height={50} alt={title} />
      <div>
        <p className="opacity-[75%] text-md">{title}</p>
        <h2 className="text-lg">{subtitle}</h2>
      </div>
    </div>
  </div>
);

// TopCards Container
const TopCards = () => (
  <div className="flex gap-3 h-fit">
    {/* Card 1 */}
    <CardRank />

    {/* Card 2 + Card 3 */}
    <div className="flex flex-col lg:flex-row gap-3 flex-1">
      <CardSimple
        icon="/images/startb.png"
        title="# Rank 31"
        subtitle="0x1Dec...1bC"
        hoverShadow="#0B91FF47"
      />
      <CardSimple
        icon="/images/dollarb.png"
        title="Total Transactions"
        subtitle="0.00"
        hoverShadow="#633CF042"
      />
    </div>
  </div>
);

export default TopCards;
