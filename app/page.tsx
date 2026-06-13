import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import WhyDTP from "@/components/sections/WhyDTP";
import WhatDTP from "@/components/sections/WhatDTP";
import Framework from "@/components/sections/Framework";
import Company from "@/components/sections/Company";
import BIValue from "@/components/sections/BIValue";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhyDTP />
        <WhatDTP />
        <Framework />
        <Company />
        <BIValue />
      </main>
    </>
  );
}