import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, CheckCircle2, Target, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ASOL Business Solutions",
  description: "Learn about ASOL's mission to drive business excellence through financial empowerment and professional advisory.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section - Clean Style */}
      <section className="py-24 md:py-32 bg-muted/20 border-b border-border/40">
        <div className="container text-center max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              Who We Are
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
            About ASOL Business Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A professional services firm providing micro-credit facilitation, business advisory, financial consultancy, and allied services to individuals, cooperatives, and corporate organizations.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="space-y-6">
                 <div className="inline-block border-b-2 border-primary pb-1 text-primary font-semibold text-sm uppercase tracking-wide">
                     Our Story
                 </div>
                 <h2 className="font-heading text-3xl font-bold text-foreground">
                     Reliable Financial Guidance for Sustainable Growth
                 </h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                     ASOL Business Solutions Limited was founded with a clear commitment: to provide structured and ethical solutions that empower businesses to grow. From market traders to corporate organizations, we understand that every business needs a solid financial foundation and strategic direction.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team consists of experienced professionals including bankers, accountants, business advisors, credit analysts, and financial consultants who bring decades of combined experience to every client relationship.
                 </p>
             </div>
             
             {/* Clean Stats/Highlights Card */}
             <div className="relative h-[400px] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 p-8 flex flex-col justify-center">
                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-foreground mb-1">Expert Team</h3>
                            <p className="text-muted-foreground">Bankers, accountants & financial consultants</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                        <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-foreground mb-1">Growth Focused</h3>
                            <p className="text-muted-foreground">Sustainable business development strategies</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                        <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                            <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-foreground mb-1">Trusted Partner</h3>
                            <p className="text-muted-foreground">Ethical solutions for lasting success</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                        <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                            <Lightbulb className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl text-foreground mb-1">Strategic Insights</h3>
                            <p className="text-muted-foreground">Professional advisory & consultancy</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Mission & Vision - Clean Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="p-10 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Target className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      To provide accessible financial and professional support that enables businesses to achieve sustainable growth.
                  </p>
              </div>
              <div className="p-10 rounded-2xl bg-muted/40 border border-border/50 hover:bg-muted/60 transition-colors">
                  <Award className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      To be a trusted partner in business development and financial empowerment across Nigeria.
                  </p>
              </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
              <div className="text-center mb-12">
                  <h2 className="font-heading text-3xl font-bold text-foreground">Our Core Values</h2>
                  <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {["Integrity", "Professionalism", "Accountability", "Client Success"].map((value, i) => (
                      <div key={value} className="bg-white p-8 rounded-xl border border-border shadow-sm text-center hover:border-primary/30 transition-colors group">
                          <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="font-bold text-lg text-foreground">{value}</h3>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}