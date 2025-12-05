"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";

const Page = () => {
  const [copied, setCopied] = useState(false);

  const referralLink = "https://tapzi.io/ref/abc123";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const ReferralCard = ({
    bgColor,
    imgSrc,
    title,
    referrals,
    commission,
    amount,
  }) => {
    return (
      <div
        className={`px-3 py-2 rounded-lg flex gap-3 items-center justify-between mt-4`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex gap-3 items-center">
          <Image src={imgSrc} alt={title} width={35} height={35} />
          <div>
            <p className="text-xl">{title}</p>
            <p className="text-white/60">{referrals}</p>
          </div>
        </div>
        <div className="text-right">
          <p style={{ fontSize: "22px" }}>{commission}</p>
          <p className="text-white/60" style={{ fontSize: "10px" }}>
            Commission
          </p>
          <p style={{ fontSize: "16px" }}>{amount}</p>
        </div>
      </div>
    );
  };
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
            <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>
            <div>
              <p style={{ fontSize: "15px" }}>{username}</p>
              <p className="text-white/60" style={{ fontSize: "12px" }}>
                {actionText}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-(--primary-green)" style={{ fontSize: "15px" }}>
              {amount}
            </p>
            <p className="text-white/60" style={{ fontSize: "12px" }}>
              {time}
            </p>
          </div>
        </div>
      </div>
    );
  };
  const ReferralStepCard = ({ imgSrc, title, description }) => {
    return (
      <div className="bg-(--seconday-bg) border border-(--seconday-bg) rounded-lg p-5 text-center">
        <div className="flex justify-center">
          <Image src={imgSrc} alt={title} width={30} height={30} />
        </div>
        <p style={{ fontSize: "22px" }}>{title}</p>
        <p className="text-white/60" style={{ fontSize: "11px" }}>
          {description}
        </p>
      </div>
    );
  };
  return (
    <div className="bg-(--primary-bg) min-h-screen p-5 pt-10 text-white">
      <div className="bg-(--primary-card-bg) border border-(--seconday-bg) rounded-lg px-5 py-3">
        <h2 className="text-3xl">Your Referral Link</h2>
        <h4 className="text-white/60 mt-2">
          Share this link with friends to earn rewards when they join
        </h4>

        {/* Input with button inside */}
        <div className="relative mt-4 w-full">
          <input
            type="text"
            placeholder={referralLink}
            readOnly
            disabled
            className="w-full bg-transparent border border-(--seconday-bg) rounded py-3 px-3 pr-20"
          />

          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-3 bg-[#27E3E4] cursor-pointer text-(--primary-bg) text-sm px-3 py-1 rounded transition-all"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="my-3 flex gap-3 items-center">
          Share on this link via
          <div className="flex gap-3">
            {/* Instagram */}
            <FaInstagram
              size={25}
              style={{
                background:
                  "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                borderRadius: "12px",
                padding: "3px",
                color: "white",
              }}
            />

            {/* Twitter */}
            <FaTwitter
              size={25}
              style={{
                color: "#fff",
                padding: "2px",
                borderRadius: "12px",
                background: "#03A9F4",
              }}
            />
            <FaDiscord
              size={25}
              className="text-white bg-[#5865F2] rounded-full"
              style={{ padding: "2px" }}
            />

            {/* PlayStation */}
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-between flex-col lg:flex-row mt-4">
        <div className="bg-(--primary-card-bg) border w-full lg:w-[60%] border-(--seconday-bg) rounded-lg px-5 py-3">
          <p className="text-3xl">Referral Tiers</p>
          <ReferralCard
            bgColor="#E4B600"
            imgSrc="/images/gold.png"
            title="Gold"
            referrals="25-49 referrals"
            commission="10%"
            amount="$300 TAPZI"
          />

          <ReferralCard
            bgColor="#949494"
            imgSrc="/images/silv.png"
            title="Silver"
            referrals="10-24 referrals"
            commission="7%"
            amount="$150 TAPZI"
          />

          <ReferralCard
            bgColor="#CC8030"
            imgSrc="/images/brong.png"
            title="Bronze"
            referrals="1-9 referrals"
            commission="5%"
            amount="$50 TAPZI"
          />
          <ReferralCard
            bgColor="#CC8030"
            imgSrc="/images/diamond.png"
            title="Diamond"
            referrals="50+ referrals"
            commission="15%"
            amount="$1000 TAPZI"
          />
        </div>

        <div className="bg-(--primary-card-bg) border w-full lg:w-[40%] border-(--seconday-bg) rounded-lg px-5 h-[430px] py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-xl">Recent Activity</p>
            </div>
            <button className=" border border-(--primary-green) text-(--primary-green) px-4 rounded">
              LIVE
            </button>
          </div>

          <div>
            <ActivityCard
              username="Alice123"
              actionText="Joined via your link"
              amount="+$25 TAPZI"
              time="2 hours ago"
            />
            <ActivityCard
              username="Bob456"
              actionText="Made a purchase"
              amount="+$50 TAPZI"
              time="5 hours ago"
            />
            <ActivityCard
              username="Charlie789"
              actionText="Referred a friend"
              amount="+$30 TAPZI"
              time="1 day ago"
            />
            <ActivityCard
              username="Diana321"
              actionText="Joined via your link"
              amount="+$25 TAPZI"
              time="2 days ago"
            />
          </div>
        </div>
      </div>

      <div className="bg-(--primary-card-bg) border w-full border-(--seconday-bg) rounded-lg px-5 py-3 mt-4">
        <p className="text-center pt-10 text-3xl">How It Works</p>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center gap-3 mt-4">
          <ReferralStepCard
            imgSrc="/images/ref1.png"
            title="Share Your Link"
            description="Copy your unique referral link and share it with friends"
          />
          <ReferralStepCard
            imgSrc="/images/ref2.png"
            title="Friends Join"
            description="When someone signs up using your link, you both get rewards"
          />
          <ReferralStepCard
            imgSrc="/images/ref3.png"
            title="Earn Commissions"
            description="Receive percentage of their purchases and advance tiers"
          />
          <ReferralStepCard
            imgSrc="/images/ref4.png"
            title="Unlock Bonuses"
            description="Reach higher tiers for bigger commissions and exclusive rewards"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
