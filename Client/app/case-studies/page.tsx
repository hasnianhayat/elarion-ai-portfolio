
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, Code, TrendingUp } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: "automation-advanced",
    title: "Advanced Workflow Automation for Enterprise Operations",
    category: "Automation",
    subtitle: "Building intelligent process automation",
    description:
      "A multinational corporation reduced manual workflow processing by 75% through custom automation pipelines.",
    metrics: [
      { label: "Time Saved", value: "320+ hours/month" },
      { label: "Cost Reduction", value: "45%" },
      { label: "Accuracy Improvement", value: "99.8%" },
    ],
    icon: Zap,
    color: "from-[#00a3a3] to-[#008080]",
    technologies: ["n8n", "Python", "PostgreSQL", "REST APIs"],
    href: "/case-studies/automation-advanced",
  },
  {
    id: "automation-agent",
    title: "Multi-Agent Sales Automation System",
    category: "AI Agents",
    subtitle: "Autonomous sales pipeline management",
    description:
      "Deployed specialized AI agents for lead qualification, follow-up, and meeting scheduling operating 24/7.",
    metrics: [
      { label: "Manual Time Reduction", value: "67%" },
      { label: "Meetings Booked", value: "3x increase" },
      { label: "Lead Quality Score", value: "+45%" },
    ],
    icon: Brain,
    color: "from-[#00a3a3] to-[#006666]",
    technologies: ["LangChain", "GPT-4", "n8n", "Salesforce API"],
    href: "/case-studies/automation-agent",
  },
  {
    id: "ai-chatbot",
    title: "Enterprise RAG-Powered Knowledge Assistant",
    category: "AI/Data Science",
    subtitle: "Semantic search and intelligent retrieval",
    description:
      "Built a custom RAG system that enables instant access to organizational knowledge across thousands of documents.",
    metrics: [
      { label: "Search Time Reduction", value: "85%" },
      { label: "Document Access Improvement", value: "10x faster" },
      { label: "User Satisfaction", value: "+40%" },
    ],
    icon: Code,
    color: "from-[#00a3a3] to-[#00cccc]",
    technologies: ["OpenAI", "Pinecone", "LangChain", "FastAPI", "React"],
    href: "/case-studies/ai-chatbot",
  },
  {
    id: "web-ecommerce",
    title: "AI-Integrated E-Commerce Platform",
    category: "Web Development",
    subtitle: "Intelligent recommendations and semantic search",
    description:
      "Rebuilt e-commerce platform with AI-powered recommendations and smart search, improving conversion and customer experience.",
    metrics: [
      { label: "AOV Increase", value: "34%" },
      { label: "Search Satisfaction", value: "+52%" },
      { label: "Cart Abandonment", value: "-28%" },
    ],
    icon: TrendingUp,
    color: "from-[#00a3a3] to-[#007f7f]",
    technologies: ["Next.js", "TensorFlow", "Elasticsearch", "Redis", "AWS"],
    href: "/case-studies/web-ecommerce",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b-2 h-screen border-[#00a3a3]/20 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8 animate-slide-in-up">
                <span className="text-sm font-semibold text-[#00a3a3]">Real Results, Proven Impact</span>
              </div>

              <h1
                className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-balance mb-8 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Case <span className="text-[#00a3a3]">Studies</span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-base text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto animate-slide-in-up mb-10"
                style={{ animationDelay: "0.2s" }}
              >
                Real-world implementations across automation, AI agents, data science, and web development. Each project
                showcases our approach to solving complex business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon
              return (
                <Link key={study.id} href={study.href}>
                  <Card className="border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a3]/20 hover:-translate-y-4 group bg-card/50 backdrop-blur-sm relative overflow-hidden cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardHeader className="relative z-10">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00a3a3]/20 to-[#00a3a3]/10 group-hover:shadow-lg group-hover:shadow-[#00a3a3]/40 transition-all duration-500">
                          <IconComponent className="h-7 w-7 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <Badge variant="outline" className="border-[#00a3a3]/50 text-[#00a3a3] bg-[#00a3a3]/5">
                          {study.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg sm:text-lg md:text-lg font-black group-hover:text-[#00a3a3] transition-colors duration-300 text-balance">
                        {study.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-2 font-semibold">{study.subtitle}</p>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-sm md:text-sm">{study.description}</p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <p className="text-lg font-bold text-[#00a3a3]">{metric.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {study.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/30 transition-all duration-300 group-hover:scale-105 mt-4">
                        Explore Project Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black mb-6 text-balance">Ready to Create Your Success Story?</h2>
            <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can solve your unique challenges with AI, automation, and intelligent systems.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl rounded-full hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-10 py-5"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
