import Image from "next/image";
import React from "react";

const LeaderPage = () => {
  const ChampionCard = ({
    rank,
    img = null,
    title,
    value,
    holdings,
    rankColor = "#FFE41B",
    borderGradient = "linear-gradient(180deg, #8FF557, #0196FD)",
  }) => {
    return (
      <div className="relative mt-3 rounded-lg p-5 bg-(--seconday-bg) overflow-x-auto lg:overflow-hidden">
        {/* Gradient border pseudo-element */}
        <div
          className="absolute left-0 bottom-0 w-full h-full pointer-events-none rounded-lg"
          style={{
            borderLeft: "2px solid transparent",
            borderBottom: "2px solid transparent",
            borderRadius: "12px",
            background: borderGradient,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative flex items-center justify-around gap-4">
          {/* Rank */}
          <div className="flex items-center">
            <p className="text-5xl" style={{ color: rankColor }}>
              {rank}
            </p>
          </div>
          <p>{img && <Image src={img} alt="icon" width={20} height={20} />}</p>
          {/* Image + Name */}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xl">Rank {rank}</p>
              <p className="text-[#FDAE3E]">{title}</p>
            </div>
          </div>

          {/* Value */}
          <div className="text-center">
            <p className="text-white/60">Value</p>
            <p>{value}</p>
          </div>

          {/* Holdings */}
          <div className="text-right">
            <p className="text-white/60">Holdings</p>
            <p>{holdings}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-(--primary-bg) min-h-screen w-full p-5 pt-10 text-white">
        <div className=" bg-(--primary-card-bg) border border-(--primary-border) rounded-lg p-5">
          <h1 className="text-2xl">Top 3 Champions</h1>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4 w-full">
            <div className="text-center lg:w-[40%]">
              <div className="bgmainimage">
                <Image
                  src="/images/tropy.png"
                  alt="trophy"
                  width={400}
                  height={400}
                />
              </div>
              <div className="justify-center flex items-center gap-2">
                <Image
                  src="/images/whale.png"
                  alt="whale"
                  width={50}
                  height={50}
                />
                <div className="md:text-3xl text-1xl">Rank 1</div>
              </div>
              <p className="text-white/60 md:text-xl text-lg">CryptoWhale</p>
              <div className="mt-10">
                <p className="text-white/60 text-lg">Holdings</p>
                <p className="md:text-4xl text-1xl">5,234,567 $TAPZI</p>
              </div>
            </div>

            <div className="lg:w-[60%] w-full">
              <div className="flex items-center gap-2 justify-around">
                <p>Rank</p>
                <p>Name</p>
                <p>Value</p>
                <p>Holdings</p>
              </div>
              <ChampionCard
                rank={2}
                img="/images/diamond.png" // optional
                title="DiamondHands"
                value="$15,434.00"
                holdings="4,523,890 $TAPZI"
                rankColor="#FFD700" // custom rank color
                borderGradient="linear-gradient(180deg, #8ff557, #0196fd)" // custom gradient
              />
              <ChampionCard
                rank={3}
                img="/images/chain.png" // optional
                title="TokenMaster"
                value="$14,434.00"
                holdings="4,123,890 $TAPZI"
                rankColor="#79C7FF" // custom rank color
                borderGradient="linear-gradient(180deg, #2696FE, #FDFD01)" // custom gradient
              />
              <ChampionCard
                rank={4}
                img="" // optional
                title="InvestorPro"
                value="$13,434.00"
                holdings="3,467,234 $TAPZI"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />
              <ChampionCard
                rank={5}
                img="" // optional
                title="HODLMaster"
                value="$13,334.00"
                holdings="3,367,234 $TAPZI"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={6}
                img="" // optional
                title="TokenKing"
                value="$13,234.00"
                holdings="3,267,234 $TAPZI"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={7}
                img="" // optional
                title="CryptoLord"
                value="$13,134.00"
                holdings="3,167,234 $TAPZI"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={8}
                img="" // optional
                title="CryptoLord"
                value="$13,034.00"
                holdings="3,067,234 $TAPZI"
                rankColor="#E4F4FF" // custom rank color
                borderGradient="linear-gradient(180deg, #63A2FF, #F8FBFF)" // custom gradient
              />{" "}
              <ChampionCard
                rank={9}
                img="" // optional
                title="CryptoLord"
                value="$13,14.00"
                holdings="3,17,234 $TAPZI"
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

export default LeaderPage;
