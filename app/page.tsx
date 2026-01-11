import { Hero } from "@/components/home/hero";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { Services } from "@/components/home/services";
import { WhyChoose } from "@/components/home/why-choose";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

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
