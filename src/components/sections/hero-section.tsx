
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ThreeParticleSystem from '@/components/effects/three-particle-system';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary/50 py-20 px-4 text-center overflow-hidden"
    >
      {/* Container for Three.js canvas, positioned behind content */}
      <div id="scene-container" className="absolute inset-0 w-full h-full z-0"></div>
      <ThreeParticleSystem containerId="scene-container" />
      
      {/* SVG Pattern Overlay: z-1, subtle dot grid for texture */}
      <div className="absolute inset-0 opacity-[0.03] z-[1]" style={{ // very subtle opacity
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A237E' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='0.5'/%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>

      {/* Main Content: z-10, drawn on top of SVG pattern and 3D particles */}
      <div className="relative z-10 animate-fade-in-up duration-1000 delay-200"> {/* Added delay for staggered animation */}
        <Logo size="lg" containerClassName="justify-center mb-8" iconClassName="text-accent" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-teal-500">
          ChartMind AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Unlock Intraday Market Insights with Advanced AI Predictions.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
            <a href="#cta">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-accent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
            <a href="#ai-explanation">Learn More <ArrowDown className="ml-2 h-5 w-5 animate-pulse" /></a>
          </Button>
        </div>
      </div>

      {/* Animated Arrow: z-10, ensure it's above particles/svg */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
      
    </section>
  );
}
