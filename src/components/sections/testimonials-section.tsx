import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "ChartMind AI has revolutionized my intraday trading. The predictions are incredibly accurate!",
    author: "Alex P.",
    role: "Day Trader",
    avatarUrl: "https://picsum.photos/100/100?random=1",
    rating: 5,
    dataAiHint: "man portrait"
  },
  {
    quote: "The insights provided are invaluable. It's like having a crystal ball for the market.",
    author: "Sarah K.",
    role: "Financial Analyst",
    avatarUrl: "https://picsum.photos/100/100?random=2",
    rating: 5,
    dataAiHint: "woman portrait"
  },
  {
    quote: "User-friendly and powerful. ChartMind AI is a game-changer for anyone serious about trading.",
    author: "Mike L.",
    role: "Retail Investor",
    avatarUrl: "https://picsum.photos/100/100?random=3",
    rating: 4,
    dataAiHint: "person office"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from traders and analysts using ChartMind AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </CardHeader>
              <CardContent className="p-6 mt-auto">
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <Image 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author} 
                        width={48} 
                        height={48} 
                        className="rounded-full"
                        data-ai-hint={testimonial.dataAiHint} 
                    />
                    <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
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
