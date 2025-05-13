
import HeroSection from '@/components/sections/hero-section';
import AiExplanationSection from '@/components/sections/ai-explanation-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CommunitySection from '@/components/sections/community-section';
import BlogSection from '@/components/sections/blog-section';
import CallToActionSection from '@/components/sections/call-to-action-section';
import FooterComponent from '@/components/layout/footer-component'; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header>
        {/* Minimal header, logo is prominent in HeroSection */}
      </header>
      <main className="flex-grow">
        <HeroSection />
        <AiExplanationSection />
        <TestimonialsSection />
        <CommunitySection />
        <BlogSection />
        <CallToActionSection />
      </main>
      <FooterComponent />
    </div>
  );
}

