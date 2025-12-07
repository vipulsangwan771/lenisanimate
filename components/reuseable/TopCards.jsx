"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowUpOutline } from "react-icons/io5";

// Card 1 (Complex Layout)
const CardRank = () => (
  <div
    className="w-full lg:w-[40%] p-4 rounded-lg bg-(--primary-card-bg) 
  border border-(--primary-border) hover:shadow-[0_0_20px_#FFDB4E33] transition-shadow duration-300"
  >
    {/* Header */}
    <div className="flex items-center flex-col lg:flex-row justify-between gap-3">
      <div className="flex w-full text-left  items-center flex-col lg:flex-row gap-3">
        <Image
          src="/images/crab.png"
          className="w-10 h-10"
          alt="crab"
          width={30}
          height={30}
        />
        <div className="w-full">
          <p className="text-[10px]">Your Current Rank</p>
          <h2 className="lg:text-[20px] text-sm">
            Crab - <span className="text-(--primary-green)">Level 1</span>
          </h2>
        </div>
      </div>

      {/* Mobile Progress */}
      <div className="w-full bg-gray-700 rounded-full overflow-hidden mt-2 block lg:hidden">
        <div
          className="h-2 bg-[#FF7C48] rounded-full"
          style={{ width: "80%" }}
        ></div>
      </div>

      <div className="flex w-full justify-end items-center gap-3">
        <p className="lg:text-[14px] text-xs text-right">
          Next Rank Turtle <br />
          500.00% to next level
        </p>
        <Image src="/images/tur.png" alt="turtle" width={30} height={30} />
      </div>
    </div>

    {/* Desktop Progress */}
    <div className="w-full bg-gray-700 rounded-full overflow-hidden mt-2 hidden lg:block">
      <div
        className="h-2 bg-[#FF7C48] rounded-full"
        style={{ width: "80%" }}
      ></div>
    </div>

    {/* Footer */}
    <div className="mt-5 md:mt-3 flex flex-col-reverse md:flex-row gap-4 justify-between items-center text-center">
      <p className="text-[#2FD9FF] text-[13px]">
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
        <p className="opacity-[75%] text-base xl:text-lg">{title}</p>
        <h2 className="text-lg xl:text-4xl">{subtitle}</h2>
      </div>
    </div>
  </div>
);
const CardSimple2 = ({ icon, title, subtitle, hoverShadow }) => (
  <div
    className={`w-full h-full p-4 rounded-lg bg-(--primary-card-bg) border border-(--primary-border)
   hover:shadow-[0_0_20px_var(--shadow-color)] transition-shadow duration-300 flex flex-col justify-center`}
    style={{ "--shadow-color": hoverShadow }}
  >
    <div className="flex items-center justify-end">
      <div className="flex items-center text-(--primary-green) bg-[#2E3B49]  border border-[#2E3B49]  ">
        <IoArrowUpOutline className="lg:h-6 rotate-45 lg:w-6 " />
        <p className="text-(--primary-green) bg-[#2E3B49] text-xs border border-[#2E3B49]  ">
          +24.5%
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-center lg:justify-start lg:text-left text-center px-3">
      <div className="flex justify-center lg:justify-start mt-3 lg:mt-0">
        <Image
          src={icon}
          className="w-10 h-10"
          width={20}
          height={20}
          alt={title}
        />
      </div>
      <div>
        <p className="opacity-[75%] text-xs mt-2">{title}</p>
        <h2 className="text-xl">{subtitle}</h2>
      </div>
    </div>
  </div>
);
// TopCards Container
const TopCards = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex gap-3 h-fit">
      {/* Card 1 */}
      <CardRank />

      {/* Card 2 + Card 3 */}
      <div className="flex flex-col lg:flex-row gap-3 flex-1">
        {isHome ? (
          <>
            <CardSimple2
              icon="/images/use.png"
              title="Active Users"
              subtitle="12,341"
              hoverShadow="#633CF042"
            />
            <CardSimple2
              icon="/images/ref3.png"
              title="Total Revenue"
              subtitle="$125,430"
              hoverShadow="#633CF042"
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default TopCards;
