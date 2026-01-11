"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="bg-muted/30 pt-24 pb-20 border-b border-border/40">
        <div className="container max-w-5xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              Our Expertise
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
              Comprehensive Corporate Solutions
            </h1>
            <div className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Licensed professionals providing expert financial administration, banking consultancy, credit analysis, arbitration, and corporate advisory services to organisations and institutions.
              </p>
              <p>
                Licensed professionals delivering financial management, credit advisory, banking consultancy, and corporate support solutions for banks, SMEs, and corporate organisations.
              </p>
            </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.slug}
                className="group flex flex-col bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6 h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto">
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-primary/80" asChild>
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/20 border-t border-border/40">
        <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
                Not sure which service fits your needs? Our team is ready to provide a tailored recommendation for your specific business challenges.
            </p>
            <Button size="lg" className="h-12 px-8 text-base shadow-lg" asChild>
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
