import { services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Correctly typing generateMetadata for Next.js 13+ app directory
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ASOL Business Solutions`,
    description: service.shortDescription,
  };
}

// Generate static params if you want static generation (optional but good for known slugs)
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breadcrumb / Back Link */}
      <div className="bg-muted/30 border-b border-border/40">
        <div className="container py-8">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all services
            </Link>
        </div>
      </div>

      {/* Service Header */}
      <div className="container py-12 lg:py-16">
        <div className="max-w-4xl">
            <div className="mb-6 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon size={32} />
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">
                {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
                {service.fullDescription}
            </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container">
         <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
                {/* Benefits Section */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold font-heading mb-6">Key Benefits</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-foreground/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Target Audience Section */}
                 <div>
                    <h2 className="text-2xl font-bold font-heading mb-6">Who Is This For?</h2>
                    <div className="flex flex-wrap gap-3">
                        {service.targetAudience.map((audience, i) => (
                            <div key={i} className="bg-muted px-4 py-2 rounded-full text-foreground/80 font-medium">
                                {audience}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                 <div className="bg-primary text-primary-foreground rounded-2xl p-8 sticky top-24 shadow-xl">
                    <h3 className="text-2xl font-bold font-heading mb-4">Ready to get started?</h3>
                    <p className="opacity-90 mb-8 leading-relaxed">
                        Contact us today to discuss how our {service.title} can help your business grow.
                    </p>
                    <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                        <Link href="/contact">Request Consultation</Link>
                    </Button>
                    <p className="text-xs opacity-60 mt-6 text-center">
                        No obligation confidential consultation.
                    </p>
                 </div>
            </div>
         </div>
      </div>
    </div>
  );
}
