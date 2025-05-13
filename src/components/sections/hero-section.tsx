
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from '@/components/effects/particle-background';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary/50 py-20 px-4 text-center overflow-hidden"
    >
      {/* Particle Canvas: z-0, drawn first among positioned elements */}
      <canvas id="particles" className="absolute inset-0 w-full h-full z-0"></canvas>
      
      {/* SVG Pattern Overlay: z-1, updated to a subtle dot grid */}
      <div className="absolute inset-0 opacity-5 z-1" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A237E' fill-opacity='0.2'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>

      {/* Main Content: z-10, drawn on top of SVG pattern and particles */}
      <div className="relative z-10 animate-fade-in-up duration-1000">
        <Logo size="lg" containerClassName="justify-center mb-8" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          ChartMind AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Unlock Intraday Market Insights with Advanced AI Predictions.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="#cta">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#ai-explanation">Learn More <ArrowDown className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
      </div>

      {/* Animated Arrow: z-10, ensure it's above particles/svg */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
      
      {/* Particle Background Logic (non-visual component, manages the canvas) */}
      <ParticleBackground />
    </section>
  );
}
