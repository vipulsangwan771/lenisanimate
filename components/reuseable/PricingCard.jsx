"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({
  bgClass,
  imageSrc,
  title,
  titleColor = "#C5DEFF",
  price,
  features,
  buyLink = "/buy",
}) => {
  return (
    <div
      className={`w-full p-5 rounded-lg border border-(--primary-border)
      bg-(--primary-card-bg) ${bgClass}
      flex flex-col h-full`}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={60}
        className="w-full"
      />

      {/* Title */}
      <p
        className="text-3xl mt-6"
        style={{ color: titleColor }}
      >
        {title}
      </p>

      {/* Price */}
      <p className="text-lg text-(--primary-green)">{price}</p>

      {/* Features (flex-grow is key) */}
      <div className="mt-5 flex-grow">
        {features.map((item, index) => (
          <p
            key={index}
            className="gap-2 flex items-center rounded bg-(--seconday-bg) p-3 mt-2 first:mt-0"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-(--primary-sky) p-1">
              <FaCheck className="text-black/70 w-4 h-4 font-bold" />
            </span>
            <span className="text-xs lg:text-base">{item}</span>
          </p>
        ))}
      </div>

      {/* Button always at bottom */}
      <div className="mt-5">
        <Button className="w-full" asChild>
          <Link href={buyLink}>BUY NOW</Link>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
