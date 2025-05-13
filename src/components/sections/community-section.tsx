
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Bitcoin, Send, Users } from "lucide-react";
import Link from "next/link";

const channels = [
  {
    name: "Nifty 50 Signals",
    description: "Stay ahead in the Indian stock market with our AI-powered Nifty 50 intraday signals.",
    link: "https://t.me/dalalstreetinsider",
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    cta: "Join Nifty 50 Channel",
  },
  {
    name: "Crypto Signals",
    description: "Navigate the volatile crypto markets with timely AI-driven trading signals for various cryptocurrencies.",
    link: "https://t.me/pipvitae",
    icon: <Bitcoin className="h-8 w-8 text-accent" />,
    cta: "Join Crypto Channel",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-background fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Users className="mx-auto h-12 w-12 text-accent mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Join Our Trading Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time signals and insights from ChartMind AI directly on Telegram.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {channels.map((channel) => (
            <Card key={channel.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
              <CardHeader className="items-center text-center">
                {channel.icon}
                <CardTitle className="text-2xl font-semibold text-primary mt-4">{channel.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow items-center text-center p-6">
                <CardDescription className="text-muted-foreground mb-6 flex-grow">
                  {channel.description}
                </CardDescription>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-auto">
                  <Link href={channel.link} target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    {channel.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
