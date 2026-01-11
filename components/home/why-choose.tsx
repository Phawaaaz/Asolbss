"use client";

import { Shield, Sparkles, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Client-Focused Solutions",
    desc: "Tailored to your specific needs.",
    icon: Users,
  },
  {
    title: "Experienced Advisors",
    desc: "Decades of combined expertise.",
    icon: Sparkles,
  },
  {
    title: "Ethical Standards",
    desc: "Transparency in every dealing.",
    icon: Shield,
  },
  {
    title: "Local Market Knowledge",
    desc: "Deep understanding of Nigeria.",
    icon: Target,
  },
  {
    title: "Long-Term Growth",
    desc: "Committed to your sustainable success.",
    icon: Zap,
  },
];

export function WhyChoose() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
              Why Choose ASOL
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine professional expertise with a deep understanding of local business environments to deliver practical solutions.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
                <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all group"
                >
                    <div className="h-12 w-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
