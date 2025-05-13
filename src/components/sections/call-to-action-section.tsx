
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Mail, Info, Zap } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-secondary fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Zap className="mx-auto h-12 w-12 text-accent mb-4 animate-bounce" /> {/* Changed icon and added animation */}
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Ready to Elevate Your Trading?
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto mb-3 font-medium">
            Leverage Cutting-Edge Artificial Intelligence for Smarter Financial Decisions.
          </p>
          <p className="text-md text-muted-foreground max-w-xl mx-auto">
            Discover how ChartMind AI's predictive power can give you a distinct market advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-foreground text-lg">
              Watch our demo to see ChartMind AI in action and learn how it can transform your trading approach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" asChild>
                <a href="#ai-explanation">
                  <Info className="mr-2 h-5 w-5" /> Learn More
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" asChild>
                <a href="mailto:info@chartmind.ai">
                  <Mail className="mr-2 h-5 w-5" /> Contact Us
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="shadow-xl overflow-hidden rounded-lg border border-primary/20 hover:border-accent/60 transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted"> {/* Added background for loading state */}
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
                    title="ChartMind AI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy" // Lazy load iframe
                  ></iframe>
                </div>
              </CardContent>
            </Card>
             <p className="text-xs text-muted-foreground mt-2 text-center md:text-left">Watch our platform overview (Placeholder video)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
