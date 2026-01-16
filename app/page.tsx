import { Hero } from "@/components/home/hero";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { Services } from "@/components/home/services";
import { WhyChoose } from "@/components/home/why-choose";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ASOL Business Solutions",
  description: "Your trusted partner for financial empowerment, micro-credit facilitation, and professional corporate advisory in Nigeria.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
