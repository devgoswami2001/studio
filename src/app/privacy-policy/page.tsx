import FooterComponent from "@/components/layout/footer-component";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            <CardTitle className="text-3xl font-bold text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Your privacy is important to us. It is ChartMind AI's policy to respect your privacy regarding any information we may collect from you across our website, chartmind.ai, and other sites we own and operate.</p>
            <h2 className="text-xl font-semibold text-foreground pt-4">1. Information We Collect</h2>
            <p>Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information."</p>
            <p>Personal information: We may ask for personal information, such as your name and email address, only when it's truly needed to provide a service to you.</p>
            <h2 className="text-xl font-semibold text-foreground pt-4">2. Use of Information</h2>
            <p>We may use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            </ul>
            <p>...</p>
            <p>[More detailed privacy policy content here]</p>
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
