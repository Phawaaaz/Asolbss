"use client";

import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    text: "Experienced financial and business professionals",
    sub: "Expert Guidance",
    icon: Users
  },
  {
    text: "Practical solutions for small and growing businesses",
    sub: "Real Impact",
    icon: TrendingUp
  },
  {
    text: "Transparent, ethical, and client-focused approach",
    sub: "Integrity First",
    icon: Award
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="md:w-1/2">
                <div className="inline-block rounded-full bg-muted border border-border px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                  Why We Are Trusted
                </div>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  A Trusted Partner for <br/><span className="text-primary italic">Sustainable Growth</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  With years of experience supporting individuals, cooperatives, and corporate organizations, ASOL Business Solutions Limited is committed to providing reliable financial guidance.
                </p>
                <div className="grid gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-foreground mb-1">{item.sub}</h4>
                                <p className="text-muted-foreground">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Visual - Clean Minimalist Stats Grid */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                     <div className="bg-muted p-8 rounded-2xl">
                          <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                          <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                     </div>
                     <div className="bg-primary p-8 rounded-2xl text-white shadow-xl">
                          <h3 className="text-4xl font-bold mb-2">95%</h3>
                          <p className="text-sm font-medium text-primary-foreground/80">Client Retention</p>
                     </div>
                </div>
                 <div className="space-y-4">
                     <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                          <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
                          <p className="text-sm font-medium text-muted-foreground">Businesses Supported</p>
                     </div>
                     <div className="bg-muted p-8 rounded-2xl">
                          <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                          <p className="text-sm font-medium text-muted-foreground">Ethical Standards</p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
