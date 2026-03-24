"use client"

const writingData = {
  "English – Professional": [
    {
      title: "You've Got a Shiny AI Hammer—But Are You Hitting the Right Nails?",
      platform: "LinkedIn",
      date: "March 25, 2025",
      link: "https://www.linkedin.com/pulse/unlocking-call-analytics-beyond-traditional-methods-llms-nana-wang-4wefe/",
    },
    {
      title: "How to Design LLM-Powered Expert Decision Applications",
      platform: "LinkedIn",
      date: "April 14, 2025",
      link: "https://www.linkedin.com/pulse/how-design-llm-powered-expert-decision-applications-conceptual-wang-ettge/",
    },
  ],
  "Chinese – Tech & Vibe": [
    {
      title: "Cursor AGI - AI编程工具体验与思考",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/share-your-work/cursor-agi",
    },
    {
      title: "AI Vibe Coding - 与AI协作编程的艺术",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/share-your-work/ai-vibe-coding-a90fd2",
    },
  ],
  "Chinese – Life": [
    {
      title: "不是你在找工作，而是工作在找你 (you don't find the job, the job finds you)",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/posts/you-don-t-find-the-job-the-job-finds-you",
    },
    {
      title: "Adult Learning 里最难的3点：Learn to Unlearn, RFR cycle, and Take it Slow",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/posts/adult-learning-3-learn-to-unlearn-rrf-cycle-and-take-it-slow-2nd-ai-ms-degree",
    },
    {
      title: "带还在咿呀学中文的老公重温97版《天龙八部》",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/posts/97",
    },
    {
      title: "Keep Your Social Muscle Lean - 让我们用健身的心态来轻盈社交",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/posts/keep-your-social-muscle-lean",
    },
    {
      title: "YC改简历-心得体会分享",
      platform: "Superlinear Academy",
      date: "Recent",
      link: "https://www.superlinear.academy/c/posts/yc-5a8c8c",
    },
  ],
}

type WritingCategory = keyof typeof writingData

export default function Writing() {
  const categories = Object.keys(writingData) as WritingCategory[]

  return (
    <section id="writing" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">Writing</h2>
          <p className="text-muted text-lg">All published writing, organized by focus area.</p>
          <div className="w-12 h-1 bg-accent mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <div className="px-4 py-3 border border-accent-secondary/50 rounded-lg bg-background">
                <h3 className="text-base font-bold text-foreground">{category}</h3>
              </div>

              {writingData[category].map((article, idx) => (
                <div
                  key={`${category}-${idx}`}
                  className="group p-5 bg-white border border-accent-secondary/40 rounded-lg hover:border-accent hover:shadow-md hover:shadow-accent/15 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">
                      {article.platform}
                    </span>
                    <span className="text-xs text-muted">{article.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>

                  {article.link !== "#" ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm font-semibold hover:text-accent-secondary transition-colors"
                    >
                      Read article →
                    </a>
                  ) : (
                    <span className="text-muted text-sm italic">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
