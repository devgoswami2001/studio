from django.shortcuts import render
from django.http import Http404
from .ai_flows import explain_chartmind_ai_flow # Import the AI flow

# Mock data for blog posts - in a real app, this would come from the database
MOCK_BLOG_POSTS = [
  {
    "slug": "understanding-market-volatility-ai",
    "title": "Understanding Market Volatility with AI",
    "date": "2024-07-15",
    "author": "ChartMind AI Team",
    "image_url": "https://picsum.photos/seed/blog1/1200/600",
    "image_alt": "Abstract representation of market volatility",
    "data_ai_hint": "market chart",
    "content_html": """
      <p>Market volatility is a key concern for traders. In this post, we delve into how ChartMind AI approaches the complex task of analyzing and predicting market volatility. Understanding these dynamics can provide a significant edge, especially in turbulent market conditions.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">The AI's Approach to Volatility</h2>
      <p>ChartMind AI employs a multi-faceted approach. It doesn't just look at historical price swings; it incorporates a vast array of data points, including:</p>
      <ul class="list-disc list-inside my-4 ml-4 space-y-2 text-foreground">
        <li><strong>News Sentiment Analysis:</strong> Gauging market mood from real-time news feeds.</li>
        <li><strong>Order Book Imbalances:</strong> Identifying potential short-term supply/demand shifts.</li>
        <li><strong>Macroeconomic Indicators:</strong> Correlating broader economic trends with market behavior.</li>
        <li><strong>Social Media Trends:</strong> Detecting early signs of changing investor sentiment.</li>
      </ul>
      <p>By processing these diverse inputs through sophisticated machine learning models, such as Long Short-Term Memory (LSTM) networks and Gradient Boosting Machines, ChartMind AI can identify subtle patterns that often precede significant volatility spikes.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">Practical Implications for Traders</h2>
      <p>What does this mean for you? Access to AI-driven volatility predictions can help in several ways:</p>
      <ul class="list-disc list-inside my-4 ml-4 space-y-2 text-foreground">
        <li><strong>Risk Management:</strong> Adjust position sizes or set tighter stop-losses during periods of anticipated high volatility.</li>
        <li><strong>Opportunity Identification:</strong> Capitalize on expected price swings with strategies like straddles or strangles (ensure you understand these complex options strategies).</li>
        <li><strong>Improved Entry/Exit Points:</strong> Time market entries and exits more effectively by avoiding periods of extreme chop or, conversely, entering when momentum is predicted to build.</li>
      </ul>
      <p>It's important to remember that AI predictions are probabilistic, not deterministic. They are tools to enhance your decision-making process, not replace it entirely. Always combine AI insights with your own research and risk management plan.</p>
      <p class="mt-6"><em>Disclaimer: Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.</em></p>
    """,
    "excerpt": "Learn how ChartMind AI analyzes and predicts market volatility, giving you an edge in turbulent times."
  },
  {
    "slug": "top-5-strategies-intraday-trading",
    "title": "Top 5 Intraday Trading Strategies Enhanced by AI",
    "date": "2024-07-08",
    "author": "Jane Doe, Senior Analyst",
    "image_url": "https://picsum.photos/seed/blog2/1200/600",
    "image_alt": "Trader looking at multiple screens with charts",
    "data_ai_hint": "stock market",
    "content_html": """
      <p>Intraday trading requires quick decisions and robust strategies. This article explores five popular intraday trading strategies and discusses how ChartMind AI's insights can potentially enhance their effectiveness.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">1. Scalping</h2>
      <p>Scalping involves making numerous small profits on minor price changes. AI can help identify micro-trends and optimal entry/exit points with greater precision than manual analysis alone.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">2. Range Trading</h2>
      <p>This strategy identifies support and resistance levels, trading within this range. AI can improve the accuracy of identifying these levels and predict potential breakouts or breakdowns.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">3. News-Based Trading</h2>
      <p>Trading on market reactions to news events. ChartMind AI's sentiment analysis can provide a faster, more nuanced understanding of news impact than simply reading headlines.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">4. Momentum Trading</h2>
      <p>Riding the wave of a strong price move. AI can help detect early signs of momentum building and also signal when momentum might be fading.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">5. Breakout Trading</h2>
      <p>Entering a position when the price breaks out of a defined range or pattern. AI can help confirm the strength of a breakout and reduce false signals.</p>
      <p class="mt-4">ChartMind AI's predictive capabilities can offer confirmation, signal potential reversals, or highlight hidden opportunities within these strategies. By integrating AI, traders might refine their edge and improve consistency.</p>
      <p class="mt-6"><em>Disclaimer: Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.</em></p>
    """,
    "excerpt": "Discover effective intraday trading strategies and how AI insights from ChartMind can optimize them."
  },
  {
    "slug": "future-of-trading-ai-predictions",
    "title": "The Future of Trading: AI Predictions and You",
    "date": "2024-07-01",
    "author": "ChartMind AI Research",
    "image_url": "https://picsum.photos/seed/blog3/1200/600",
    "image_alt": "Futuristic interface with financial data",
    "data_ai_hint": "futuristic finance",
    "content_html": """
      <p>Artificial Intelligence is no longer a futuristic concept in finance; it's a present-day reality transforming how markets operate and how individuals trade. This post explores the trajectory of AI in trading and what it means for you.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">Democratization of Advanced Tools</h2>
      <p>Previously, sophisticated algorithmic trading tools were exclusive to large institutions. AI platforms like ChartMind AI are democratizing access, allowing retail traders to leverage capabilities once out of reach.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">Hyper-Personalization</h2>
      <p>Future AI systems will likely offer even more personalized trading insights, adapting to individual risk profiles, trading styles, and goals. Imagine an AI co-pilot that understands your specific needs.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">Predictive Analytics on Steroids</h2>
      <p>As AI models become more advanced and computational power increases, the accuracy and granularity of market predictions are expected to improve. This could lead to identifying opportunities that are currently unimaginable.</p>
      <h2 class="text-2xl font-semibold text-primary mt-6 mb-3">Ethical Considerations and Regulation</h2>
      <p>With great power comes great responsibility. The industry and regulators will continue to grapple with ethical considerations, fairness, and market stability in an AI-driven trading world.</p>
      <p class="mt-4">The future of trading is intertwined with AI. Embracing these technologies wisely can open new doors for traders. ChartMind AI is committed to being at the forefront of this evolution, providing powerful yet accessible tools.</p>
      <p class="mt-6"><em>Disclaimer: Trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results.</em></p>
    """,
    "excerpt": "Explore the evolving landscape of financial trading and the pivotal role AI plays in shaping its future."
  },
]


MOCK_TESTIMONIALS = [
  {
    "quote": "ChartMind AI has revolutionized my intraday trading. The predictions are incredibly accurate and the platform is easy to use!",
    "author": "Alex P.",
    "role": "Seasoned Day Trader",
    "avatar_url": "https://picsum.photos/seed/user1/100/100",
    "rating": 5,
    "data_ai_hint": "professional man"
  },
  {
    "quote": "The insights provided are invaluable. It's like having a crystal ball for the market, helping me make confident decisions.",
    "author": "Sarah K.",
    "role": "Financial Analyst",
    "avatar_url": "https://picsum.photos/seed/user2/100/100",
    "rating": 5,
    "data_ai_hint": "professional woman"
  },
  {
    "quote": "User-friendly and powerful. ChartMind AI is a game-changer for anyone serious about gaining an edge in trading.",
    "author": "Mike L.",
    "role": "Retail Investor & Tech Enthusiast",
    "avatar_url": "https://picsum.photos/seed/user3/100/100",
    "rating": 5,
    "data_ai_hint": "happy investor"
  }
]

def home_view(request):
    ai_explanation_data = explain_chartmind_ai_flow()
    context = {
        'ai_explanation': ai_explanation_data.get('explanation', 'Error fetching explanation.'),
        'testimonials': MOCK_TESTIMONIALS,
        'blog_posts_preview': MOCK_BLOG_POSTS[:3] # Show first 3 for homepage
    }
    return render(request, 'main/home.html', context)

def blog_list_view(request):
    context = {
        'blog_posts': MOCK_BLOG_POSTS,
        'page_title': 'Blog | ChartMind AI',
        'page_description': 'Latest insights, articles, and news from ChartMind AI on AI-powered trading, market analysis, and financial technology.'
    }
    return render(request, 'main/blog_list.html', context)

def blog_post_detail_view(request, slug):
    post = next((p for p in MOCK_BLOG_POSTS if p['slug'] == slug), None)
    if not post:
        raise Http404("Blog post not found")
    
    # Basic excerpt for meta (Django templates don't have JS substring)
    meta_description = ''.join(post['content_html'].split('</p>')[0:2]) + '</p>' # very basic
    meta_description = meta_description.replace('<p>', '').replace('</p>', ' ').replace('<h2 class="text-2xl font-semibold text-primary mt-6 mb-3">','').replace('</h2>',' ')[:160]


    context = {
        'post': post,
        'page_title': f"{post['title']} | ChartMind AI Blog",
        'page_description': meta_description
    }
    return render(request, 'main/blog_post_detail.html', context)

def privacy_policy_view(request):
    context = {
        'page_title': 'Privacy Policy | ChartMind AI',
    }
    return render(request, 'main/privacy_policy.html', context)

def terms_of_service_view(request):
    context = {
        'page_title': 'Terms of Service | ChartMind AI',
    }
    return render(request, 'main/terms_of_service.html', context)
