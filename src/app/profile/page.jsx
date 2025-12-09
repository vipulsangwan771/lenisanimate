import TopCards from "@/components/reuseable/TopCards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Dot = ({ color }) => (
  <span
    className="w-2 h-2 rounded-full"
    style={{ backgroundColor: color }}
  ></span>
);

const InfoRow = ({ icon, title, value }) => (
  <div className="rounded border border-[#312752] mt-3 p-3 bg-[#18133C]">
    <div className="flex gap-3 items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image src={icon} alt={title} width={20} height={20} />
        <div>
          <p className="md:text-xl text-lg">{title}</p>
          <p
            className="opacity-[70%] text-xs md:text-base"
            style={{ fontSize: "15px" }}
          >
            Balance: 0.00
          </p>
        </div>
      </div>
      <p className="text-[#27E3E4] text-sm md:text-base">$0.00</p>
    </div>
  </div>
);

const ProfilePage = () => {
  return (
    <div className="bg-(--primary-bg) min-h-screen w-full p-5  pt-20 md:pt-10 text-white">
      {/* TOP CARDS */}
      <TopCards />

      {/* WALLET SECTION */}
      <div className="flex flex-col lg:flex-row gap-3 h-fit mt-6">
        <div className="w-full lg:w-[73%] bg-(--primary-card-bg) border border-(--primary-border) rounded-lg p-4">
          <h2 className="text-3xl text-center md:text-left  font-bold">Wallet</h2>

          {/* Wallet Address Box */}
          <p className="opacity-[70%] mt-5">Wallet Address</p>
          <div className="border rounded border-[#312752] mt-3 p-3 bg-[#18133C]">
            <div className="flex items-center gap-2 justify-between overflow-hidden">
              <p>0x1Dee3051e9E221d77d7409620ddFa0ECAdeF31bC</p>

              <div className="hidden xl:flex items-center gap-4">
                <Button className="px-3 bg-[#312752] border border-[#312752] text-white hover:bg-[#27E3E4] hover:text-[#07012A]">
                  Change Wallet
                </Button>
                <Button className="px-3 bg-[#27E3E4] text-[#07012A] hover:text-white hover:bg-[#312752]">
                  Disconnect
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex mt-3 gap-2 justify-center xl:hidden">
            <Button className="px-3 bg-[#312752] border border-[#312752] text-white hover:bg-[#27E3E4] hover:text-[#07012A]">
              Change Wallet
            </Button>
            <Button className="px-3 bg-[#27E3E4] text-[#07012A] hover:text-white hover:bg-[#312752]">
              Disconnect
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-6 flex items-center gap-8 justify-around md:justify-between px-2 md:px-10 mb-5">
            {/* LEFT */}
            <div>
              <p className="opacity-[70%] text-[13px]">Total $TAPZI Balance</p>
              <p className="text-xl">0.00 $TAPZI</p>

              <p className="opacity-[70%] mt-6 text-[13px]">
                Coin Spent Amount
              </p>
              <p className="text-xl">0.00</p>

              <p className="opacity-[70%] mt-6 text-[13px]">
                Referral Earnings
              </p>
              <p className="text-xl">0.00 $TAPZI</p>
            </div>

            {/* RIGHT */}
            <div>
              <p className="opacity-[70%] text-[13px]">Current Coin Worth</p>
              <p className="text-xl">0.00</p>

              <p className="opacity-[70%] mt-6 text-[13px]">
                Your Coin Worth at Launch
              </p>
              <p className="text-xl">0.00</p>

              <p className="opacity-[70%] mt-6 text-[13px]">Referral Code</p>
              <p className="text-xl text-[#27E3E4]">u4o55nv8</p>
            </div>
          </div>
        </div>

        {/* TOKEN DISTRIBUTION */}
        <div className="flex-1 bg-(--primary-card-bg) border border-(--primary-border) rounded-lg p-4">
          <p className="text-center text-xl  font-bold">Token Distribution</p>

          <div className="mt-8 flex items-center justify-between px-3 gap-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Dot color="#FFA500" />
                <span>Purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <Dot color="#8651FF" />
                <span>Referrals</span>
              </div>
              <div className="flex items-center gap-2">
                <Dot color="#27E3E4" />
                <span>Bonus</span>
              </div>
            </div>

            <div className="space-y-1">
              <p>0.0%</p>
              <p>0.0%</p>
              <p>0.0%</p>
            </div>
          </div>

          <div className="md:mt-20 mt-6 text-center">
            Name: Tapzi <br />
            Email: tapzi25@gmail.com
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="w-full my-6 bg-(--primary-card-bg) border border-(--primary-border) rounded-lg p-4">
        <div className="flex gap-3 items-center justify-center md:justify-between">
          <h2 className="text-2xl  font-bold">Products & Assets</h2>
          <p className="opacity-[65%] hidden md:block text-[10px]">3/7</p>
        </div>

        <p className="opacity-[65%] md:hidden text-right text-[10px]">3/7</p>

        <InfoRow icon="/images/dollar.png" title="TAPZI Token" value="0" />
        <InfoRow icon="/images/bluelock.png" title="Staked TAPZI" value="0" />
        <InfoRow icon="/images/ribbon.png" title="Referral Rewards" value="0" />
      </div>
    </div>
  );
};

export default ProfilePage;
