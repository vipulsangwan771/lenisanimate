"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import GradientText from "./GradientText";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="pt-5 px-5 pb-3 border-b border-gray-700 bg-(--primary-bg) text-white md:block hidden">
        {pathname === "/" && (
          <div className="flex items-center justify-between gap-4">
            <div className="">
              <GradientText className="text-3xl">Welcome to Tapzi</GradientText>

              <div className="">Your decenttralized command center</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <div className="">Current Price</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 mt-1 rounded-full bg-(--primary-green)"></span>
                  <div className="text-(--primary-green) text-2xl">$0.0035</div>
                </div>
              </div>
              <div>
                <Button className="text-lg" asChild>
                  <Link href="/buy">Buy</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        {pathname === "/buy" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">
                Tapzi Token Presale
              </GradientText>
              <div className="">
                Join the future of decentralized finance. Secure your $TAPZI
                tokens at exclusive presale rates.
              </div>
            </div>
          </div>
        )}
        {pathname === "/orders" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">
                Transaction History
              </GradientText>
              <div className="">
                Track all your transactions and token movements
              </div>
            </div>
          </div>
        )}
        {pathname === "/profile" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">Profile</GradientText>
              <div className="">
                Manage your account and track your progress
              </div>
            </div>
          </div>
        )}
        {pathname === "/roi" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">ROI Calculator</GradientText>
              <div className="">Calculate your profits on token launch</div>
            </div>
          </div>
        )}
        {pathname === "/leaderboard" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">
                Global Leaderboard
              </GradientText>
              <div className="">
                Compete with investors worldwide for exclusive rewards
              </div>
            </div>
          </div>
        )}
        {pathname === "/referrals" && (
          <div className="flex items-center justify-center gap-4">
            <div className=" text-center">
              <GradientText className="text-3xl">Referral Program</GradientText>
              <div className="">
                Earn rewards by inviting friends to join Tapzi
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-700 bg-(--primary-bg) text-white md:hidden block flex items-center justify-center">
        <img
          src="/images/mainlogo.png"
          className="w-25 mx-auto h-15 "
          alt="main logo"
        />
      </div>
    </>
  );
};

export default Navbar;
