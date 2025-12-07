import React from "react";
import Image from "next/image";

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
    <div className="relative mt-3 rounded-lg bg-(--seconday-bg)">
      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          borderLeft: "2px solid transparent",
          borderBottom: "2px solid transparent",
          background: borderGradient,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div
        className="
        relative
        grid
        grid-cols-[8px_5px_1fr_1fr_10fr]
        md:grid-cols-[20px_25px_2fr_1.5fr_8fr]
        items-center
        gap-6
        px-6
        py-3
      "
      >
        {/* Rank */}
        <p
          className="md:text-3xl text-lg font-bold"
          style={{ color: rankColor }}
        >
          {rank}
        </p>

        {/* Icon */}
        <div className="md:w-[20px] w-[15px]  md:h-[20px] flex items-center justify-center">
          {img && <Image src={img} alt="icon" width={20} height={20} />}
        </div>

        {/* Name */}
        <div>
          <p className="md:text-base leading-none">Rank {rank}</p>
          <p className="text-[#FDAE3E] text-[10px]">{title}</p>
        </div>

        {/* Value */}
        <div className="text-center">
          <p className="text-white/60 text-xs">Value</p>
          <p className="md:text-sm text-[10px]">{value}</p>
        </div>

        {/* Holdings */}
        <div className="text-right">
          <p className="text-white/60 text-xs">Holdings</p>
          <p className="md:text-sm text-[10px]">{holdings}</p>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
