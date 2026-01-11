"use client";

import { ArrowRight, Banknote, BarChart3, BookOpen, Building2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Micro-Credit Services",
    description: "Flexible and accessible micro-credit solutions designed to support market traders, entrepreneurs, and small business owners.",
    icon: Banknote,
    href: "/services/micro-credit"
  },
  {
    title: "Business Advisory & Planning",
    description: "Strategic guidance, business planning, and professional advisory services to help businesses make informed decisions.",
    icon: TrendingUp,
    href: "/services/business-advisory"
  },
  {
    title: "Financial & Credit Analysis",
    description: "Professional credit appraisal, financial evaluation, and risk assessment services for individuals and organizations.",
    icon: BarChart3,
    href: "/services/financial-analysis"
  },
  {
    title: "Business Registration Support",
    description: "Assistance with business name and company registration through the Corporate Affairs Commission (CAC).",
    icon: Building2,
    href: "/services/business-registration"
  },
  {
    title: "Professional & Educational Services",
    description: "Training, financial counseling, business workshops, and allied professional services.",
    icon: BookOpen,
    href: "/services/educational-services"
  },
];



export function Services() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
        {/* Background blobs for premium feel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
      <div className="container relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-secondary font-medium tracking-wide uppercase text-sm">What We Do</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mt-2 mb-4 text-primary">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a wide range of financial, advisory, and professional services designed to support businesses at every stage — from startup to expansion.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-primary/20"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="mb-8 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <Link href={service.href} className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
                  View Service <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
