import Logo from '@/components/logo';
import { Mail, Phone, FileText, Copyright } from 'lucide-react';
import Link from 'next/link';

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo 
              iconClassName="text-accent" 
              textClassName="text-primary-foreground" 
              containerClassName="mb-4"
            />
            <p className="text-sm opacity-80">
              Empowering traders with AI-driven market insights for smarter intraday decisions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#hero" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#ai-explanation" className="hover:text-accent transition-colors">How it Works</Link></li>
              <li><Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="#cta" className="hover:text-accent transition-colors">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <a href="mailto:info@chartmind.ai" className="hover:text-accent transition-colors">info@chartmind.ai</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center md:flex md:justify-between">
          <p className="text-sm opacity-80 mb-4 md:mb-0 flex items-center justify-center">
            <Copyright className="h-4 w-4 mr-1.5" /> {currentYear} ChartMind AI. All rights reserved.
          </p>
          <div className="space-x-4 text-sm">
            <Link href="/terms-of-service" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Terms of Service</Link>
            <span className="opacity-50">|</span>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
