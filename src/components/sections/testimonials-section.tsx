
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // AvatarImage removed as next/image is used directly
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "ChartMind AI has revolutionized my intraday trading. The predictions are incredibly accurate and the platform is easy to use!",
    author: "Alex P.",
    role: "Seasoned Day Trader",
    avatarUrl: "https://picsum.photos/seed/user1/100/100",
    rating: 5,
    dataAiHint: "professional man"
  },
  {
    quote: "The insights provided are invaluable. It's like having a crystal ball for the market, helping me make confident decisions.",
    author: "Sarah K.",
    role: "Financial Analyst",
    avatarUrl: "https://picsum.photos/seed/user2/100/100",
    rating: 5,
    dataAiHint: "professional woman"
  },
  {
    quote: "User-friendly and powerful. ChartMind AI is a game-changer for anyone serious about gaining an edge in trading.",
    author: "Mike L.",
    role: "Retail Investor & Tech Enthusiast",
    avatarUrl: "https://picsum.photos/seed/user3/100/100",
    rating: 5, // Changed to 5 for consistency
    dataAiHint: "happy investor"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
           <ShieldCheck className="mx-auto h-12 w-12 text-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Trusted by Traders Like You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from individuals and professionals benefiting from ChartMind AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col bg-card border border-transparent hover:border-accent/50 rounded-xl overflow-hidden transform hover:-translate-y-1"
            >
              <CardHeader className="p-6 bg-secondary/30">
                <Quote className="h-10 w-10 text-accent mb-4 transform -scale-x-100" /> {/* Flipped quote for style */}
                <p className="text-foreground text-lg leading-relaxed italic">"{testimonial.quote}"</p>
              </CardHeader>
              <CardContent className="p-6 mt-auto flex flex-col items-start"> {/* Align content to start for better structure */}
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 mr-4 border-2 border-accent/50 p-0.5">
                    <Image 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author} 
                        width={56} 
                        height={56} 
                        className="rounded-full object-cover"
                        data-ai-hint={testimonial.dataAiHint} 
                    />
                    <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
