import ActivityCard from "@/components/reuseable/ActivityCard";
import PricingCard from "@/components/reuseable/PricingCard";
import PricingSlider from "@/components/reuseable/PricingSlider ";
import RevenueUsersChart from "@/components/reuseable/RevenueUsersChart";
import TopCards from "@/components/reuseable/TopCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const pricingCards = [
           <PricingCard
            bgClass="main-cardbg-1"
            imageSrc="/images/card1.png"
            title="Shrimp"
            titleColor="#C5DEFF"
            price="$500–$999"
            features={[
              "+5% extra TAPZI on each purchase",
              "Practice Arena (free matches)",
              "Small surprise airdrops",
              "+10% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-2"
            imageSrc="/images/card2.png"
            title="Fish"
            titleColor="#FFFFFF"
            price="$1000–$4999"
            features={[
              "+10% extra TAPZI on each purchase",
              "Monthly casual tournaments",
              "Early beta invites",
              "Referral bonus: 2% per qualified referral",
              "+20% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-3"
            imageSrc="/images/card3.png"
            title="Crab"
            titleColor="#FB9169"
            price="$5,000–$9,999"
            features={[
              "+15% extra TAPZI on each purchase",
              "VIP tournaments + 48-hour early access",
              "EEP Weight: 1× the Seasonal Rewards Pool",
              "Referral bonus: 4% per qualified referral",
              "+30% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-4"
            imageSrc="/images/card4.png"
            title="Octopus"
            titleColor="#06A76B"
            price="$10,000–$24,999"
            features={[
              "+20% extra TAPZI on each purchase",
              "EEP Weight: 2.5× Seasonal Rewards Pool",
              "Private roundtables / AMAs",
              "Access to variable staking rewards",
              "Referral bonus: 6% per qualified referral",
              "+40% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-5"
            imageSrc="/images/card5.png"
            title="Dolphin"
            titleColor="#70BBFF"
            price="$25,000–$49,999"
            features={[
              "+30% extra TAPZI on each purchase",
              "EEP Weight: 4× of the Seasonal Rewards Pool",
              "“Legendary” tournaments + VIP event access(limited spots)",
              "Priority access to variable staking",
              "Referral bonus: 7% per qualified referral",
              "+50% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-6"
            imageSrc="/images/card6.png"
            title="Shark"
            titleColor="#0C8FBA"
            price="$50,000–$99,999"
            features={[
              "+40% extra TAPZI on each purchase",
              "EEP Weight: 6× of the Seasonal Rewards Pool",
              "Elite retreats/strategy sessions (limited) +online editions",
              "Priority staking with occasional boosters",
              "Partner spotlight (co-branded, approval-based)",
              "Referral bonus: 8% per qualified referral",
              "+75% extra game credits (non-cash)",
            ]}
          />,
          <PricingCard
            bgClass="main-cardbg-7"
            imageSrc="/images/card7.png"
            title="Whale"
            titleColor="#DCD2A4"
            price="$100,000+"
            features={[
              "+50% extra TAPZI on each purchase",
              "EEP Weight: 10× of the Seasonal Rewards Pool",
              "Priority for major event sponsorship/co-hostslots (subject to availability)",
              "Access to private seasonal staking pools",
              "“Whale” badge in the Tapzi app",
              "Referral bonus: 10% per qualified referral",
              "+100% extra game credits (non-cash)",
            ]}
          />
 
  ];

  return (
    <>
      <div className="bg-(--primary-bg) min-h-screen w-full p-5 md:pt-10 text-white">
        <div className="block md:hidden">
          <div className="text-center gap-4 mb-5">
            <div className="flex items-center gap-4 justify-center">
              <div className="">Current Price</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-(--primary-green)"></span>
                <div className="text-(--primary-green) text-2xl">$0.0035</div>
              </div>
            </div>
            <div>
              <Button className="text-lg" asChild>
                <Link href="/buy">BUY NOW</Link>
              </Button>
            </div>
          </div>
        </div>
        <TopCards />
        <div className="mt-5 grid grid-cols-1">
          <div className="flex justify-between gap-4 flex-col lg:flex-row">
            <div className="lg:w-[60%] w-full p-5 bg-(--primary-card-bg) rounded-lg border-(--primary-border) border grid grid-cols-1">
              <RevenueUsersChart />
            </div>
            <div className="lg:w-[40%] w-full p-5 bg-(--primary-card-bg) rounded-lg border-(--primary-border) border">
              <div className="flex items-center  justify-center md:justify-start gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-xl font-medium">Live Activity</p>
                </div>
                <button className=" border border-(--primary-green) text-(--primary-green) px-4 rounded">
                  LIVE
                </button>
              </div>
              <div>
                <ActivityCard
                  username="Alice123"
                  actionText="0x123...abc"
                  amount="+$25 TAPZI"
                  time="2 hours ago"
                />
                <ActivityCard
                  username="Bob456"
                  actionText="0x123...abc"
                  amount="+$50 TAPZI"
                  time="5 hours ago"
                />
                <ActivityCard
                  username="Charlie789"
                  actionText="0x123...abc"
                  amount="+$30 TAPZI"
                  time="1 day ago"
                />
                <ActivityCard
                  username="Diana321"
                  actionText="J0x123...abc"
                  amount="+$25 TAPZI"
                  time="2 days ago"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 md:text-3xl text-center md:text-left text-xl font-medium">
          Rewards by Your Rank
        </div>
        {/* BELOW lg → SLIDER */}
        <div className="grid grid-cols-1">
          <div className="block lg:hidden">
            <PricingSlider>{pricingCards}</PricingSlider>
          </div>

          {/* ABOVE lg → GRID */}
          <div className="hidden lg:grid grid-cols-3 gap-6">{pricingCards}</div>
        </div>
  
      </div>
    </>
  );
}
