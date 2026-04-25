
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Bot,
  Database,
  Globe,
  Zap,
  BarChart,
  Brain,
  Network,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section - Comprehensive Services Overview */}
        <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b-2 border-[#00a3a3]/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container relative z-10 py-24 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8 animate-slide-in-up relative overflow-hidden group">
                <div className="absolute inset-0 animate-shimmer" />
                <Sparkles className="h-5 w-5 text-[#00a3a3] animate-scale-pulse relative z-10" />
                <span className="text-sm font-semibold text-[#00a3a3] relative z-10">
                  Complete Intelligence Solutions
                </span>
              </div>

              <h1
                className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-balance mb-8 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Enterprise-Grade{" "}
                <span className="text-[#00a3a3] relative inline-block animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  AI Solutions
                </span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-base text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto animate-slide-in-up mb-10"
                style={{ animationDelay: "0.2s" }}
              >
                We deliver three interconnected service pillars: Autonomous AI Agents for intelligent automation,
                advanced AI & Data Science for predictive intelligence, and enterprise Web Development for sophisticated
                user experiences—all working together in a unified ecosystem.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-6 py-5 group relative overflow-hidden font-bold rounded-full"
                >
                  <Link href="#services" className="flex items-center gap-3">
                    <span className="relative z-10">Explore All Services</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/5 text-sm px-6 py-5 transition-all duration-300 bg-transparent font-bold shadow-none rounded-full"
                >
                  <Link href="/contact">Get Custom Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Dynamic and Interactive */}
      <section id="services" className="container py-24 md:py-32">
  <div className="grid gap-8 lg:grid-cols-3 items-stretch">
    
    {/* Service 1 */}
    <Card className="flex flex-col h-full border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a3]/20 hover:-translate-y-4 group bg-card/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3a3]/15 group-hover:bg-[#00a3a3]/25 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#00a3a3]/40">
          <Bot className="h-8 w-8 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
        </div>

        <CardTitle className="text-lg font-black group-hover:text-[#00a3a3] transition-colors duration-300">
          Autonomous AI Agents
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6 flex flex-col flex-grow">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Deploy intelligent agents that work autonomously, making real-time decisions and executing complex
          workflows without human intervention. From multi-agent orchestration to domain-specific fine-tuning.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase tracking-wide text-[#00a3a3]">
            Core Capabilities
          </h4>
          {[
            "Multi-agent orchestration systems",
            "Custom fine-tuned models",
            "Real-time decision making",
            "24/7 autonomous operation",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a3a3] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-4 border-t border-border">
          <h4 className="font-bold text-sm uppercase tracking-wide text-[#00a3a3]">
            Perfect For
          </h4>
          <p className="text-sm text-muted-foreground">
            Sales automation, customer support, operations workflows, lead qualification,
            and any process requiring 24/7 intelligent handling.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <Button
            asChild
            className="w-full bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/30 transition-all duration-300 group-hover:scale-105"
          >
            <Link href="/ai-agents" className="flex items-center justify-center gap-2">
              View AI Agent Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Service 2 */}
    <Card className="flex flex-col h-full border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a3]/20 hover:-translate-y-4 group bg-card/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3a3]/15 group-hover:bg-[#00a3a3]/25 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#00a3a3]/40">
          <Database className="h-8 w-8 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
        </div>

        <CardTitle className="text-lg font-black group-hover:text-[#00a3a3] transition-colors duration-300">
          AI & Data Science
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6 flex flex-col flex-grow">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Production-grade AI models, intelligent data pipelines, and machine learning
          systems that unlock insights and drive predictive intelligence at scale.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase tracking-wide text-[#00a3a3]">
            Core Capabilities
          </h4>
          {[
            "Custom LLM development",
            "Advanced RAG architectures",
            "Real-time data pipelines",
            "Predictive analytics engines",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a3a3] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Button
            asChild
            className="w-full bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/30 transition-all duration-300 group-hover:scale-105"
          >
            <Link href="/case-studies" className="flex items-center justify-center gap-2">
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Service 3 */}
    <Card className="flex flex-col h-full border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a3]/20 hover:-translate-y-4 group bg-card/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3a3]/15 group-hover:bg-[#00a3a3]/25 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#00a3a3]/40">
          <Globe className="h-8 w-8 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
        </div>

        <CardTitle className="text-lg font-black group-hover:text-[#00a3a3] transition-colors duration-300">
          Web Development
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 space-y-6 flex flex-col flex-grow">
        <p className="text-muted-foreground leading-relaxed text-sm">
          Enterprise-grade web applications with modern frameworks, AI-native architecture,
          and sophisticated interfaces built for scale, security, and performance.
        </p>

        <div className="space-y-3">
          <h4 className="font-bold text-sm uppercase tracking-wide text-[#00a3a3]">
            Core Capabilities
          </h4>
          {[
            "Next.js & React expertise",
            "AI-integrated interfaces",
            "Enterprise scalability",
            "Bank-grade security",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a3a3] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Button
            asChild
            className="w-full bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#00a3a3]/30 transition-all duration-300 group-hover:scale-105"
          >
            <Link href="/contact" className="flex items-center justify-center gap-2">
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>

  </div>
</section>

        {/* Integrated Ecosystem Section */}
        <section className="border-y-2 border-[#00a3a3]/20 bg-accent/30 py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-20">
              <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight mb-8">
                How Our Services{" "}
                <br />
                <span className="text-[#00a3a3] animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  Work Together
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed">
                Each service pillar is powerful independently, but together they create a unified intelligence ecosystem
                where automation, data, and interfaces are seamlessly integrated.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Agents + Data",
                  description: "Autonomous agents fed by predictive analytics and real-time data insights",
                  icon: Network,
                  delay: "0s",
                },
                {
                  title: "Agents + Web",
                  description: "AI agents powering interactive user interfaces and intelligent workflows",
                  icon: Zap,
                  delay: "0.1s",
                },
                {
                  title: "Data + Web",
                  description: "Advanced analytics and visualizations embedded in sophisticated dashboards",
                  icon: BarChart,
                  delay: "0.2s",
                },
                {
                  title: "Full Stack AI",
                  description: "All three pillars unified for end-to-end intelligent automation",
                  icon: Sparkles,
                  delay: "0.3s",
                },
                {
                  title: "Custom Integration",
                  description: "Tailored combinations matching your specific business requirements",
                  icon: Code,
                  delay: "0.4s",
                },
                {
                  title: "Continuous Evolution",
                  description: "Systems that learn, improve, and adapt over time automatically",
                  icon: Brain,
                  delay: "0.5s",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Card
                    key={index}
                    className="border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-lg hover:shadow-[#00a3a3]/20 hover:-translate-y-2 group bg-background/50"
                    style={{ animationDelay: item.delay }}
                  >
                    <CardContent className="pt-8 pb-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/15 group-hover:bg-[#00a3a3]/25 transition-all duration-300">
                        <Icon className="h-6 w-6 text-[#00a3a3] group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-bold text-sm mb-2 group-hover:text-[#00a3a3] transition-colors">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 to-[#00a3a3]/5 border-t-2 border-[#00a3a3]/20 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-[#00a3a3]/10 blur-3xl animate-particle-float" />
            <div
              className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-[#00a3a3]/10 blur-3xl animate-particle-float"
              style={{ animationDelay: "3s" }}
            />
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight mb-8">
                Ready to Transform Your{" "}
                <br />
                <span className="text-[#00a3a3] animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  Operations?
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-12 leading-relaxed">
                Let's discuss how our integrated AI services can drive measurable business impact for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-xl rounded-full hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-10 py-5 group font-bold"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-3 border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/10 text-sm rounded-full px-10 py-5 transition-all duration-500 font-bold shadow-lg hover:shadow-xl bg-transparent"
                >
                  <Link href="/case-studies">View Successful Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
