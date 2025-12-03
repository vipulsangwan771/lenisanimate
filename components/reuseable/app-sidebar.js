"use client";

import { usePathname } from "next/navigation";

import { BsGraphUpArrow } from "react-icons/bs";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaWallet } from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { IoMdPodium } from "react-icons/io";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: IoMdPodium, class: "text-[#FFCA09]" },
  {
    title: "Buy Now",
    url: "/buy",
    icon: BsGraphUpArrow,
    class: "text-[#FDAE3E]",
  },
  {
    title: "Orders",
    url: "/orders",
    icon: PiShoppingCartSimpleFill,
    class: "text-[#00FFE1]",
  },
  {
    title: "Profile",
    url: "/profile",
    icon: FaWallet,
    class: "text-[#1BFF58]",
  },
  {
    title: "ROI",
    url: "/roi",
    icon: HiMiniArrowTrendingUp,
    class: "text-[#1BDFFF]",
  },
  {
    title: "Referrals",
    url: "/referrals",
    icon: FaUser,
    class: "text-[#BBFF1B]",
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: GiPodiumWinner,
    class: "text-[#25FFE6]",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" className="bg-(--primary-bg) outline-none">
      <SidebarContent className="bg-(--primary-bg) rounded-none outline-none border-gray-700 border-r">
        <SidebarGroup>
          <SidebarGroupLabel className="p-2 mb-12 mt-8">
            <img
              src="/images/mainlogo.png"
              className="w-40 mx-auto h-30 p-2 "
              alt="main logo"
            />
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`px-3 rounded hover:border-l-4 hover:border-[#43DCFF] border-l-4 mb-1
                      ${
                        isActive
                          ? "border-l-4 border-[#43DCFF]"
                          : "border-l-transparent"
                      }
                    `}
                  >
                    <SidebarMenuButton
                      asChild
                      className={`
                        py-5  px-6
                        ${
                          isActive ? "bg-[#160E45] border border-[#41298F]" : ""
                        }
                        hover:bg-[#160E45] hover:border hover:border-[#41298F]
                      `}
                    >
                      <Link href={item.url}>
                        <item.icon className={item.class} />
                        <span className="text-white">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <div className="relative flex items-center my-4 mt-5 mx-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
            <div className="text-center">
              v2.0.0 Beta
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
