"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import CountdownTimer from "@/components/reuseable/CountdownTimer";
import ChampionCard from "@/components/reuseable/ChampionCard";

const BuyPage = () => {
  const MIN_AMOUNT = 0;
  const MAX_AMOUNT = 1_000_000;
  const INITIAL_PERCENT = 67.5;
  const INITIAL_AMOUNT = (INITIAL_PERCENT / 100) * MAX_AMOUNT;
  const inputRef = useRef(null);
  const [coValue, setCoValue] = useState("1");
  const [amountRaised, setAmountRaised] = useState(INITIAL_AMOUNT);
  const progressPercent = ((amountRaised / MAX_AMOUNT) * 100).toFixed(1);

  const formattedAmount = amountRaised.toLocaleString();

  const ActivityCard = ({
    username,
    actionText,
    amount,
    img = null,
    time,
    dotColor = "bg-green-500",
  }) => {
    return (
      <div className="mt-4 bg-(--seconday-bg) rounded-lg px-4 py-2">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={img}
              alt="nos"
              width={20}
              height={20}
              className="rounded-full"
            />
            <div>
              <p style={{ fontSize: "15px" }}>{username}</p>
              <p className="text-white/60" style={{ fontSize: "12px" }}>
                {actionText}
              </p>
            </div>
            <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>
          </div>
          <div className="text-right">
            <p className="text-[#2FD9FF]" style={{ fontSize: "15px" }}>
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
  const handleBuyWithCrypto = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Small delay so scroll completes before focus
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  };

  return (
    <>
      <div className="bg-(--primary-bg) min-h-screen w-full md:pt-5 pt-20 text-white ">
        <div className="pb-4 px-5 text-3xl border-b border-gray-700 text-center  font-bold">
          BUY TAPZI
        </div>

        <div className="flex gap-4 flex-col xl:flex-row items-start justify-between p-5 w-full">
          <div className="p-5 w-full xl:w-[60%] bg-(--primary-card-bg) border border-(--primary-border) rounded-lg">
            <div className="flex justify-between gap-3 items-center">
              <div className="">
                <h2 className="md:text-2xl text-xl font-medium">
                  Presale Is Live
                </h2>
                <p className="text-white/60 md:text-base text-sm">
                  Limited time offer - Act fast!
                </p>
              </div>
              <button className="border border-[#4AFF6B] rounded text-[#4AFF6B] bg-[#041921] px-4 text-base py-1 flex gap-2">
                <Image
                  src="/images/flame.png"
                  alt="flame"
                  className="h-5 w-5"
                  width={15}
                  height={1}
                />
                LIVE
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3 justify-between">
              <p className="text-white/60">Raised</p>
              <p>
                <span className="text-2xl text-[#7AFEFF]">
                  ${formattedAmount}
                </span>
                <span> / $1,000,000</span>{" "}
              </p>
            </div>
            <div className="flex flex-col items-center mt-4 px-3 md:px-0">
              <input
                type="range"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={1000}
                value={amountRaised}
                onChange={(e) => setAmountRaised(Number(e.target.value))}
                className="w-full md:w-[100%] h-3  rounded-lg appearance-none cursor-pointer accent-[#27E3E4]
                 transition-all"
                style={{
                  background: `linear-gradient(
                  to right,
                  #3C46FF 0%,
                  #42FA31 ${(amountRaised / MAX_AMOUNT) * 100}%,
                  #424242 ${(amountRaised / MAX_AMOUNT) * 100}%,
                  #424242 100%
                )`,
                }}
              />
            </div>
            <div className="mt-4 flex items-center gap-3 justify-between">
              <p className="text-white/60">Progress</p>
              <p>{progressPercent}%</p>
            </div>

            <div className="mt-5 bg-(--seconday-bg) border border-(--seconday-bg) p-4 rounded-lg">
              <CountdownTimer />
            </div>

            <div className="mt-5 text-lg md:text-3xl font-bold">
              Choose Payment Method
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                onClick={handleBuyWithCrypto}
                className="bg-(--primary-sky) hover:bg-(--primary-hover-sky)  text-(--primary-bg) rounded-md
               cursor-pointer px-3 py-3 flex gap-3 items-center justify-center"
              >
                <p className="lg:text-xl md:text-sm font-bold text-lg">
                  Buy With Crypto
                </p>
                <Image
                  src="/images/bitcoin.png"
                  alt="wewc"
                  width={70}
                  height={20}
                />
              </button>
              <button
                className="bg-(--primary-sky) hover:bg-(--primary-hover-sky) text-(--primary-bg) rounded-md 
              cursor-pointer px-3 py-3 flex gap-3 items-center justify-center"
              >
                <p className="lg:text-xl font-bold md:text-base text-lg">
                  Buy With Card
                </p>
                <Image
                  src="/images/visa.png"
                  alt="wewc"
                  width={70}
                  height={20}
                />
              </button>
            </div>

            <div className="mt-8 rounded-full bg-(--seconday-bg) border border-(--primary-border)  px-5 py-3">
              <div className="flex items-center gap-3 justify-center">
                <p className="md:text-lg text-[10px] font-bold">
                  Presale Price =
                  <span className="text-(--primary-sky)">$0.0035</span>
                </p>
                |
                <p className="md:text-lg text-[10px] font-bold">
                  Launch Price =
                  <span className="text-(--primary-sky)">$0.09</span>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-(--seconday-bg) border border-(--primary-border)  px-5 py-3 flex items-center gap-3 justify-between">
              <div className="">
                <p className="text-xs">You Pay inETH:</p>
                <p className="text-xl">
                  <input
                    ref={inputRef}
                    type="text"
                    className="mt-1 rounded-full px-3 max-w-[200px] w-[90px]"
                    value={coValue}
                     onChange={(e) => setCoValue(e.target.value)}
                    placeholder="Enter Amount"
                  />
                </p>
              </div>
              <button
                className="bg-(--primary-card-bg) rounded-full border border-(--primary-border) flex items-center gap-1 justify-center
                px-9 py-1"
              >
                <Image
                  src="/images/eth.png"
                  alt="eth logo"
                  width={20}
                  height={20}
                />
                <div className="">
                  <p className="text-xl">ETH</p>
                  <p className="text-white/60" style={{ fontSize: "10px" }}>
                    ERC-20
                  </p>
                </div>
              </button>
            </div>
            <div className="mt-3 rounded-lg bg-(--seconday-bg) border border-(--primary-border)  px-5 py-3 flex items-center gap-3 justify-between">
              <div className="">
                <p className="text-xs">
                  You Receive $TAPZI +
                  <span className="text-(--primary-green)">Advanced NFT</span>
                </p>
                <p className="text-xl">178855.83</p>
              </div>
              <button
                className="bg-(--primary-card-bg) rounded-full border border-(--primary-border) flex items-center justify-center
                 px-10 py-1"
              >
                <Image
                  src="/images/mainlogo.png"
                  alt="eths logo"
                  width={50}
                  height={50}
                />
              </button>
            </div>

            <button
              className="text-(--primary-bg) font-bold bg-(--primary-sky) hover:bg-(--primary-hover-sky) mt-4 rounded-md cursor-pointer
            flex justify-center w-full px-3 py-4 text-lg md:text-2xl"
            >
              Connect Wallet To Continue
            </button>

            <div
              className="mt-5 mx-5  rounded-lg bg-(--seconday-bg) border border-(--primary-border)  px-5 py-3 
           text-center md:text-sm lg:text-base text-[10px]"
            >
              By continuing, you agree to our terms & conditions.
            </div>
          </div>

          <div className="xl:w-[40%]  w-full">
            <div className="bg-(--primary-card-bg) border w-full border-(--primary-border) rounded-lg px-5  py-3">
              <div className="flex items-center  justify-center md:justify-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-xl font-medium">Live Activity</p>
                </div>
                <button className="text-sm border border-(--primary-green) text-(--primary-green) px-4 rounded">
                  LIVE
                </button>
              </div>

              <div>
                <ActivityCard
                  username="Alice123"
                  actionText="Joined via your link"
                  amount="+$25 TAPZI"
                  time="2 hours ago"
                  img="/images/usa.png"
                />
                <ActivityCard
                  username="Bob456"
                  actionText="Made a purchase"
                  amount="+$50 TAPZI"
                  time="5 hours ago"
                  img="/images/uk.png"
                />
                <ActivityCard
                  username="Charlie789"
                  actionText="Referred a friend"
                  amount="+$30 TAPZI"
                  time="1 day ago"
                  img="/images/ca.png"
                />
                <ActivityCard
                  username="Diana321"
                  actionText="Joined via your link"
                  amount="+$25 TAPZI"
                  time="2 days ago"
                  img="/images/caa.png"
                />
              </div>
            </div>

            <div className="bg-(--primary-card-bg) border w-full pb-5 border-(--primary-border) rounded-lg px-5 h-auto w-full mt-5 py-4x">
              <div
                className="
                  grid
                  grid-cols-[8px_5px_67px_2fr_3fr]
                  md:grid-cols-[20px_28px_1.7fr_1.5fr_3fr]
                  lg:grid-cols-[20px_25px_1.3fr_1.5fr_3fr]
                  xl:grid-cols-[20px_30px_2fr_1.5fr_3fr]
                  gap-6
                  px-5
                  md:px-5
                  pt-3 text-sm md:text-base  overflow-auto
                "
              >
                <p>Rank</p>
                <p></p>
                <p>Name</p>
                <p className="text-center">Value</p>
                <p className="text-right">$TAPZI</p>
              </div>
              <ChampionCard
                rank={2}
                img="/images/diamond.png" // optional
                title="DiamondHand"
                value="$15,434.00"
                holdings="4,523,890"
                rankColor="#FFD700" // custom rank color
                borderGradient="linear-gradient(180deg, #8ff557, #0196fd)" // custom gradient
              />
              <ChampionCard
                rank={3}
                img="/images/chain.png" // optional
                title="TokenMaster"
                value="$14,434.00"
                holdings="4,123,890"
                rankColor="#79C7FF" // custom rank color
                borderGradient="linear-gradient(180deg, #2696FE, #FDFD01)" // custom gradient
              />
              <ChampionCard
                rank={4}
                img="" // optional
                title="InvestorPro"
                value="$13,434.00"
                holdings="4,467,234"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />
              <ChampionCard
                rank={5}
                img="" // optional
                title="HODLMaster"
                value="$13,334.00"
                holdings="4,367,234"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={6}
                img="" // optional
                title="TokenKings"
                value="$13,234.00"
                holdings="4,267,234"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={7}
                img="" // optional
                title="CryptoLord"
                value="$13,134.00"
                holdings="4,167,234"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={8}
                img="" // optional
                title="CryptoLord"
                value="$13,034.00"
                holdings="4,067,234"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={9}
                img="" // optional
                title="CryptoLord"
                value="$103,14.00"
                holdings="4,17,2034"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
