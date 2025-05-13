
import { explainChartMindAI } from '@/ai/flows/ai-explanation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Lightbulb, Zap } from 'lucide-react';

export default async function AiExplanationSection() {
  let explanationData;
  try {
    explanationData = await explainChartMindAI({});
  } catch (error) {
    console.error("Failed to fetch AI explanation:", error);
    explanationData = { explanation: "ChartMind AI leverages state-of-the-art machine learning models, including deep neural networks and recurrent neural networks, to analyze vast amounts of historical and real-time market data. This includes price movements, trading volumes, news sentiment, and macroeconomic indicators. By identifying complex patterns and correlations that are often invisible to human traders, our AI can generate probabilistic forecasts of short-term market direction, providing users with a valuable edge in their intraday trading strategies. The system continuously learns and adapts, refining its predictions as new data becomes available." }; // Fallback explanation
  }

  return (
    <section id="ai-explanation" className="py-16 sm:py-24 bg-secondary fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Lightbulb className="mx-auto h-12 w-12 text-accent mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            How ChartMind AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the sophisticated technology powering our market predictions.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden border-2 border-primary/10 hover:border-accent/50 transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-primary via-indigo-700 to-accent p-6 md:p-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary-foreground/20 rounded-full">
                <Cpu className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary-foreground">The Science of Prediction</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg text-foreground leading-relaxed whitespace-pre-line">
                {explanationData.explanation}
              </p>
            </div>
            <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                    Our system continuously learns and adapts, refining its predictive models with every new piece of market data, ensuring that you always have the most up-to-date insights.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
