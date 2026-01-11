"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { services } from "@/lib/services-data";

const homeServices = services.slice(0, 3);



export function Services() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" /> */}
        
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
          {homeServices.map((service, index) => (
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
              
              <p className="mb-8 text-muted-foreground leading-relaxed line-clamp-3">
                {service.shortDescription}
              </p>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
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
