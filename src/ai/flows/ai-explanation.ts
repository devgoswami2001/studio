// This is an AI-powered explanation of how ChartMind AI works.

'use server';

/**
 * @fileOverview Explains how ChartMind AI works to predict intraday market movements.
 *
 * - explainChartMindAI - A function that returns the explanation.
 * - ExplainChartMindAIInput - The input type for the explainChartMindAI function.
 * - ExplainChartMindAIOutput - The return type for the explainChartMindAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainChartMindAIInputSchema = z.object({})
export type ExplainChartMindAIInput = z.infer<typeof ExplainChartMindAIInputSchema>

const ExplainChartMindAIOutputSchema = z.object({
  explanation: z.string().describe('A clear and concise explanation of how ChartMind AI works, including the algorithms it uses to predict intraday market movements.')
});
export type ExplainChartMindAIOutput = z.infer<typeof ExplainChartMindAIOutputSchema>

export async function explainChartMindAI(input: ExplainChartMindAIInput): Promise<ExplainChartMindAIOutput> {
  return explainChartMindAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainChartMindAIPrompt',
  input: {schema: ExplainChartMindAIInputSchema},
  output: {schema: ExplainChartMindAIOutputSchema},
  prompt: `Explain how ChartMind AI uses advanced algorithms to predict intraday market movements. Focus on providing a clear and concise explanation that is easy to understand, even for someone without a deep understanding of financial markets or AI.  Do not include disclaimers. Just the explanation.`
});

const explainChartMindAIFlow = ai.defineFlow(
  {
    name: 'explainChartMindAIFlow',
    inputSchema: ExplainChartMindAIInputSchema,
    outputSchema: ExplainChartMindAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
