
import Logo from '@/components/logo';
import { Mail, Phone, FileText, Copyright, Send, Users, TrendingUp, Bitcoin, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
            <ul className="space-y-2 text-sm">
              <li><Link href="/#hero" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link href="/#ai-explanation" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">How it Works</Link></li>
              <li><Link href="/#testimonials" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Testimonials</Link></li>
               <li><Link href="/#blog" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Blog</Link></li>
              <li><Link href="/#community" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Community</Link></li>
              <li><Link href="/#cta" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Get Started</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold text-accent mb-3">Community Channels</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                <Link href="https://t.me/dalalstreetinsider" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Nifty 50 Signals
                </Link>
              </li>
              <li className="flex items-center">
                <Bitcoin className="h-5 w-5 mr-2 text-accent" />
                <Link href="https://t.me/pipvitae" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">
                  Crypto Signals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <a href="mailto:info@chartmind.ai" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">info@chartmind.ai</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="opacity-80">+1 (555) 123-4567</span>
              </li>
               <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-accent" />
                <Link href="/blog" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Our Blog</Link>
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
