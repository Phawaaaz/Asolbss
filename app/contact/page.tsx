import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ASOL Business Solutions",
  description: "Get in touch with ASOL for your business needs. We are ready to help you transform and grow.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
       {/* Header */}
       <section className="py-20 text-center bg-muted/20 border-b border-border/40">
          <div className="container">
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to learn more about our services? We’d love to hear from you.
              </p>
          </div>
       </section>

      <div className="container py-20 pb-32">
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center hover:shadow-md transition-all hover:border-primary/20">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                    Suite SM 79 & 80 Sapon Shopping Mall,<br />Sapon, Abeokuta, Ogun State.
                </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center hover:shadow-md transition-all hover:border-primary/20">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Email Us</h3>
                <p className="text-muted-foreground">Contact@asolsolution.com</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center hover:shadow-md transition-all hover:border-primary/20">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Call Us</h3>
                <p className="text-muted-foreground">08174220000, 08034547851</p>
            </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground">Fill out the form below and we ll get back to you shortly.</p>
                </div>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
                            <input id="name" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                            <input id="email" type="email" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                        <input id="subject" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="How can we help?" />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                        <textarea id="message" className="flex min-h-[160px] w-full rounded-lg border border-input bg-background px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" placeholder="Tell us about your project or inquiry..." />
                    </div>
                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white font-medium rounded-lg">Send Message</Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
