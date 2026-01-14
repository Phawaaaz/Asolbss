"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-background overflow-hidden">
      <div className="container relative z-10 flex items-center justify-center pt-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold tracking-wide uppercase">
            Trusted by 500+ Businesses
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1] tracking-tight">
            Empowering Business <br/>
            <span className="text-primary">With Expert Financing</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a licensed professional providing expert financial administration, banking consultancy, credit analysis, arbitration, and corporate advisory services to organisations and institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-full shadow-xl shadow-primary/20">
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 border-muted hover:bg-muted text-foreground rounded-full">
              <Link href="/contact">Explore Service</Link>
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
             <div className="flex items-center gap-2">
               <div className="h-2 w-2 rounded-full bg-green-500" />
               <span>Expert Advisors</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="h-2 w-2 rounded-full bg-green-500" />
               <span>Tailored Solutions</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="h-2 w-2 rounded-full bg-green-500" />
               <span>Ethical Approach</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}