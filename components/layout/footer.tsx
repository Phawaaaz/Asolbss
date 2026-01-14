import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Summary */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                <Image src="/asolwhite.png" alt="ASOL Logo" fill className="object-cover" />
             </div>
             <span className="font-heading text-3xl font-bold">ASOL</span>
          </div>
          <p className="text-secondary-foreground/80 text-sm leading-relaxed max-w-xs">
            We provide structured financial advice, business planning support, and professional consultancy services that drive growth and stability for individuals and organizations.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-extrabold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-secondary transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="text-sm hover:text-secondary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-extrabold mb-4 text-white">Our Services</h4>
          <ul className="space-y-3">
            <li><Link href="/services/micro-credit-services" className="text-sm hover:text-secondary transition-colors">Micro-Credit Services</Link></li>
            <li><Link href="/services/business-advisory-planning" className="text-sm hover:text-secondary transition-colors">Business Advisory</Link></li>
            <li><Link href="/services/financial-credit-analysis" className="text-sm hover:text-secondary transition-colors">Financial Analysis</Link></li>
            <li><Link href="/services/business-registration-support" className="text-sm hover:text-secondary transition-colors">Business Registration</Link></li>
            <li><Link href="/services/professional-educational-services" className="text-sm hover:text-secondary transition-colors">Professional Training</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-lg font-extrabold mb-4 text-white">Contact Us</h4>
          <div className="space-y-4 text-sm text-secondary-foreground/80">
            <p className="flex flex-col">
              <span className="font-semibold text-white mb-1">Office Address:</span>
              <span>Suite SM 79 & 80 Sapon Shopping Mall,<br />Sapon, Abeokuta, Ogun State.</span>
            </p>
            <div className="flex flex-col">
              <span className="font-semibold text-white mb-1">Phone:</span>
              <span>08174220000, 08034547851</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white mb-1">Email:</span>
              <span>Contact@asolsolution.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-secondary-foreground/60">
          &copy; {new Date().getFullYear()} ASOL Business Solutions Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-secondary-foreground/60">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
