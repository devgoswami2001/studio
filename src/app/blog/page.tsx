
import Link from 'next/link';
import Image from 'next/image';
import FooterComponent from '@/components/layout/footer-component';
import Logo from '@/components/logo';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

// Mock data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "understanding-market-volatility-ai",
    title: "Understanding Market Volatility with AI",
    date: "2024-07-15",
    excerpt: "Learn how ChartMind AI analyzes and predicts market volatility, giving you an edge in turbulent times.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    imageAlt: "Abstract representation of market volatility",
    dataAiHint: "market chart"
  },
  {
    slug: "top-5-strategies-intraday-trading",
    title: "Top 5 Intraday Trading Strategies Enhanced by AI",
    date: "2024-07-08",
    excerpt: "Discover effective intraday trading strategies and how AI insights from ChartMind can optimize them.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    imageAlt: "Trader looking at multiple screens with charts",
    dataAiHint: "stock market"
  },
  {
    slug: "future-of-trading-ai-predictions",
    title: "The Future of Trading: AI Predictions and You",
    date: "2024-07-01",
    excerpt: "Explore the evolving landscape of financial trading and the pivotal role AI plays in shaping its future.",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    imageAlt: "Futuristic interface with financial data",
    dataAiHint: "futuristic finance"
  },
  // Add more mock posts if needed
];

export const metadata = {
  title: 'Blog | ChartMind AI',
  description: 'Latest insights, articles, and news from ChartMind AI on AI-powered trading, market analysis, and financial technology.',
};

export default function BlogListPage() {
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
        <div className="text-center mb-12">
          <BookOpen className="mx-auto h-16 w-16 text-accent mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-3">
            ChartMind AI Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert analysis, trading tips, and updates on the latest in AI financial technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
             <article key={post.slug} className="flex">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full bg-card">
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover aspect-[3/2]"
                    data-ai-hint={post.dataAiHint}
                  />
                </Link>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold text-primary mb-1">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <time dateTime={post.date} className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <CardDescription className="text-foreground leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="text-accent p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>
         {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </main>
      <FooterComponent />
    </div>
  );
}
