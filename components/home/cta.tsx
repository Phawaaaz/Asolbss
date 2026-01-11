import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 md:py-24 shadow-2xl">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Speak with our team today to explore how ASOL Business Solutions can support your business goals through professional advisory and micro-credit services.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto text-lg h-14 px-6 shadow-lg" asChild>
                 <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
