import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const TransactionCard = ({
  icon: Icon = PiShoppingCartSimpleFill,
  iconColor = "#00FFE1",
  img = null,
  title,
  txnId,
  buttonText,
  buttonColor,
  buttonBorder,
  amount,
  value,
  date,
  fee,
}) => {
  return (
    <div className="p-5 mt-6 bg-(--primary-card-bg) border border-(--primary-border) rounded-lg">
      {/* Top Section */}
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          {img ? (
            <Image
              src={img}
              alt="txn-icon"
              width={23}
              height={23}
              className="object-contain"
            />
          ) : (
            <Icon className={`text-[${iconColor}]`} size={28} />
          )}

          <div>
            <p className="text-sm">{title}</p>
            <p className="text-white/60 text-[10px]">{txnId}</p>
          </div>
        </div>

        <button
          className={`border rounded px-2 py-1 text-sm`}
          style={{
            borderColor: buttonBorder,
            color: buttonColor,
            background: "#041921",
          }}
        >
          {buttonText}
        </button>
      </div>

      {/* AMOUNT / VALUE */}
      <div className="flex gap-2 items-center w-full mt-2">
        <p className="text-white/60 flex-1 text-sm">Amount</p>
        <p className="text-white/60 flex-1 text-center text-sm">Value</p>
      </div>

      <div className="flex gap-2 items-center w-full">
        <p className="text-white flex-1">{amount}</p>
        <p className="text-[#2FD9FF] flex-1 text-center">{value}</p>
      </div>

      {/* DATE / FEE */}
      <div className="flex gap-2 items-center w-full mt-2">
        <p className="text-white/60 flex-1 text-sm">Date</p>
        <p className="text-white/60 flex-1 text-center text-sm">Network Fee</p>
      </div>

      <div className="flex gap-2 items-center w-full">
        <p className="text-white flex-1 text-sm">{date}</p>
        <p className="text-white/60 flex-1 text-center text-sm">{fee}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
