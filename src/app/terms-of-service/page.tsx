import FooterComponent from "@/components/layout/footer-component";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="container mx-auto">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Welcome to ChartMind AI. These terms and conditions outline the rules and regulations for the use of ChartMind AI's Website, located at chartmind.ai.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ChartMind AI if you do not agree to take all of the terms and conditions stated on this page.</p>
            <h2 className="text-xl font-semibold text-foreground pt-4">1. License</h2>
            <p>Unless otherwise stated, ChartMind AI and/or its licensors own the intellectual property rights for all material on ChartMind AI. All intellectual property rights are reserved. You may access this from ChartMind AI for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Republish material from ChartMind AI</li>
              <li>Sell, rent or sub-license material from ChartMind AI</li>
              <li>Reproduce, duplicate or copy material from ChartMind AI</li>
              <li>Redistribute content from ChartMind AI</li>
            </ul>
            <h2 className="text-xl font-semibold text-foreground pt-4">2. Disclaimer</h2>
            <p>The information provided by ChartMind AI is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. Trading financial instruments involves substantial risk of loss and is not suitable for every investor.</p>
            <p>...</p>
            <p>[More detailed terms and conditions content here]</p>
            <div className="pt-6 text-center">
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <FooterComponent />
    </div>
  );
}
