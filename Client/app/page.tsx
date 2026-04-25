
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard";
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"


import {
  ArrowRight,
  Bot,
  Database,
  Globe,
  LineChart,
  Shield,
  Cpu,
  Network,
  Sparkles,
  Zap,
  Target,
  Layers,
} from "lucide-react"


const services = [
  {
    title: "Autonomous AI Agents",
    description:
      "Deploy self-managing intelligent systems that handle complex workflows autonomously. Multi-agent orchestration with specialized roles, custom fine-tuning for domain expertise, and seamless integration with existing infrastructure. From concept to 24/7 autonomous operation.",
    icon: Bot,
    link: "/ai-agents",
    buttonText: "Explore AI Agents",
    features: [
      {
        icon: Network,
        title: "Multi-Agent Orchestration",
        desc: "Coordinated AI teams with specialized roles",
      },
      {
        icon: Zap,
        title: "Intelligent Automation",
        desc: "Enterprise workflow integration at scale",
      },
      {
        icon: Cpu,
        title: "Custom Fine-Tuning",
        desc: "Domain-specific intelligence optimization",
      },
    ],
  },
  {
    title: "AI & Data Science",
    description:
      "Build production-grade AI infrastructure with custom-trained models, advanced RAG architectures, and real-time analytics engines. Complete data engineering from ETL pipelines to synthetic data generation.",
    icon: Database,
    link: "/services",
    buttonText: "View AI Services",
    features: [
      {
        icon: Sparkles,
        title: "Production AI Models",
        desc: "Custom LLMs, RAG systems, and vision models",
      },
      {
        icon: LineChart,
        title: "Predictive Analytics",
        desc: "Real-time insights and forecasting engines",
      },
      {
        icon: Database,
        title: "Data Engineering",
        desc: "Scalable pipelines and data transformation",
      },
    ],
  },
  {
    title: "Web Development",
    description:
      "Create enterprise-grade web applications with AI-native architecture. Modern stack with Next.js, React, and cutting-edge frameworks designed for scale.",
    icon: Globe,
    link: "/services",
    buttonText: "View Web Services",
    features: [
      {
        icon: Layers,
        title: "Enterprise Platforms",
        desc: "Custom solutions for complex requirements",
      },
      {
        icon: Bot,
        title: "AI-Native Architecture",
        desc: "Seamless intelligence integration",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        desc: "Bank-grade security and compliance",
      },
    ],
  },
];

export default function HomePage() {

  ;
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 min-h-[72vh] flex items-center justify-center w-full">
          <AnimatedBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-[#00a3a3]/5 blur-3xl animate-particle-float"
              style={{ animationDelay: "4s" }}
            />
          </div>

          <div className="container relative z-10 py-10 w-full">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-4 py-3 mb-6 animate-slide-in-up relative overflow-hidden">
                <Sparkles className="h-4 w-4 text-[#00a3a3] animate-scale-pulse relative z-10" />
                <span className="text-sm font-semibold text-[#00a3a3] relative z-10">Transforming Enterprise Through AI</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl text-balance mb-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                Building the {" "}
                <span className="text-[#00a3a3] relative inline-block animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  Future of Intelligence
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                We architect scalable AI ecosystems that drive measurable business transformation. From autonomous multi-agent systems to enterprise-grade data platforms—delivering intelligent solutions that evolve with your ambition and scale without limits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <Button asChild size="lg" className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 transition-all duration-300 text-sm px-6 py-5 rounded-full font-semibold shadow-sm">
                  <Link href="/services" className="flex items-center gap-2">
                    <span className="relative z-10">Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 relative z-10" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/5 text-sm px-6 py-5 rounded-full transition-all duration-300 font-semibold shadow-none">
                  <Link href="/ai-agents" className="flex items-center gap-2">
                    <Bot className="h-5 w-5 animate-scale-pulse" />
                    AI Agent Systems
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                <div className="space-y-2 group">
                  <div className="text-4xl font-extrabold text-[#00a3a3] group-hover:scale-105 transition-transform duration-300">50+</div>
                  <div className="text-sm font-semibold text-muted-foreground">AI Systems Deployed</div>
                </div>
                <div className="space-y-2 group">
                  <div className="text-4xl font-extrabold text-[#00a3a3] group-hover:scale-105 transition-transform duration-300">99.9%</div>
                  <div className="text-sm font-semibold text-muted-foreground">Enterprise Uptime</div>
                </div>
                <div className="space-y-2 group">
                  <div className="text-4xl font-extrabold text-[#00a3a3] group-hover:scale-105 transition-transform duration-300">∞</div>
                  <div className="text-sm font-semibold text-muted-foreground">Scalability Ceiling</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Domains */}
        <section className="relative overflow-hidden border-y-2 border-[#00a3a3]/20 bg-accent/30 py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-24">
              <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight mb-8">
                Three Pillars of{" "}
                <br />
                <span className="text-[#00a3a3] animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  Intelligent Transformation
                </span>
              </h2>
              <p className="text-sm  sm:text-base md:text-base text-muted-foreground leading-relaxed">
                Comprehensive AI infrastructure designed for enterprises demanding scale, reliability, and measurable
                ROI. We build systems that don't just automate—they evolve.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 items-stretch">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Card
                    key={index}
                    className="h-full flex flex-col border-3 border-border 
        hover:border-[#00a3a3] transition-all duration-500 
        hover:shadow-2xl hover:shadow-[#00a3a3]/20 
        hover:-translate-y-4 group bg-card/50 
        backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="pt-10 pb-10 relative z-10 flex flex-col flex-1">

                      {/* Top Content Wrapper */}
                      <div>
                        {/* Main Icon */}
                        <div
                          className="mb-8 flex h-20 w-20 items-center justify-center 
              rounded-2xl bg-[#00a3a3]/10 
              group-hover:bg-[#00a3a3]/20 transition-all duration-500 
              animate-float group-hover:animate-scale-pulse relative 
              group-hover:shadow-xl group-hover:shadow-[#00a3a3]/40"
                          style={{ animationDelay: `${index}s` }}
                        >
                          <Icon className="h-10 w-10 text-[#00a3a3] group-hover:scale-125 transition-transform duration-500" />
                          <div className="absolute inset-0 rounded-2xl bg-[#00a3a3]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse-glow" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black mb-5 group-hover:text-[#00a3a3] transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                          {service.description}
                        </p>
                      </div>

                      {/* Features Section (Flexible Area) */}
                      <div className="flex-1">
                        <div className="space-y-4">
                          {service.features.map((feature, i) => {
                            const FeatureIcon = feature.icon;

                            return (
                              <div key={i} className="flex items-start gap-4 group/item">
                                <div
                                  className="mt-1 flex h-8 w-8 items-center justify-center 
                      rounded-lg bg-[#00a3a3]/10 
                      group-hover/item:bg-[#00a3a3]/20 
                      transition-all duration-300 
                      group-hover/item:scale-110"
                                >
                                  <FeatureIcon className="h-5 w-5 text-[#00a3a3]" />
                                </div>

                                <div>
                                  <div className="font-bold text-base mb-1 group-hover/item:text-[#00a3a3] transition-colors">
                                    {feature.title}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {feature.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Button (Always Bottom) */}
                      <Button
                        asChild
                        className="w-full mt-8 bg-[#00a3a3] 
            hover:bg-[#00a3a3]/90 text-white font-bold 
            shadow-lg hover:shadow-xl 
            hover:shadow-[#00a3a3]/30 
            transition-all duration-300 
            group-hover:scale-105"
                      >
                        <Link
                          href={service.link}
                          className="flex items-center justify-center gap-2"
                        >
                          {service.buttonText}
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>

                    </CardContent>
                  </Card>
                );
              })}
            </div>


          </div>
        </section>

        {/* Visual Flow Section */}
        <section className="relative overflow-hidden container py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight text-center mb-10">
              Integrated{" "}
              <br />
              <span className="text-[#00a3a3] animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                Intelligence Ecosystem
              </span>
            </h2>
            <p className="text-center text-sm sm:text-base md:text-base text-muted-foreground mb-20 max-w-3xl mx-auto">
              A unified architecture where autonomous decision-making, intelligent data processing, and sophisticated
              delivery systems work as one cohesive intelligence layer.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-16">
              <div className="flex-1 text-center group">
                <div className="mx-auto mb-8 flex h-25 w-25 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00a3a3]/20 to-[#00a3a3]/5 group-hover:from-[#00a3a3]/30 group-hover:to-[#00a3a3]/10 transition-all duration-500 group-hover:scale-110 animate-pulse-glow relative">
                  <Bot className="h-16 w-16 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-3xl bg-[#00a3a3]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg sm:text-lg md:text-lg font-black mb-4 group-hover:text-[#00a3a3] transition-colors">AI Agents</h3>
                <p className="text-muted-foreground mb-5 font-semibold text-sm sm:text-sm md:text-sm">Autonomous intelligence layer</p>
                <div className="text-xs sm:text-xs md:text-xs text-muted-foreground space-y-2">
                  <div className="font-medium">→ Multi-agent orchestration</div>
                  <div className="font-medium">→ Real-time decision making</div>
                  <div className="font-medium">→ Self-optimizing systems</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center gap-3">
                <ArrowRight className="h-10 w-10 text-[#00a3a3] animate-bounce-subtle" />
                <div className="text-sm text-[#00a3a3] font-black uppercase tracking-wider">Flow</div>
              </div>

              <div className="flex-1 text-center group">
                <div
                  className="mx-auto mb-8 flex h-25 w-25 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00a3a3]/20 to-[#00a3a3]/5 group-hover:from-[#00a3a3]/30 group-hover:to-[#00a3a3]/10 transition-all duration-500 group-hover:scale-110 animate-pulse-glow relative"
                  style={{ animationDelay: "1s" }}
                >
                  <Database className="h-16 w-16 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-3xl bg-[#00a3a3]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg sm:text-lg md:text-lg font-black mb-4 group-hover:text-[#00a3a3] transition-colors">AI & Data</h3>
                <p className="text-muted-foreground mb-5 font-semibold text-sm sm:text-sm md:text-sm">Processing & analytics engine</p>
                <div className="text-xs sm:text-xs md:text-xs text-muted-foreground space-y-2">
                  <div className="font-medium">→ Real-time data pipelines</div>
                  <div className="font-medium">→ Predictive modeling</div>
                  <div className="font-medium">→ Intelligent transformation</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center gap-3">
                <ArrowRight
                  className="h-10 w-10 text-[#00a3a3] animate-bounce-subtle"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="text-sm text-[#00a3a3] font-black uppercase tracking-wider">Flow</div>
              </div>

              <div className="flex-1 text-center group">
                <div
                  className="mx-auto mb-8 flex h-25 w-25 items-center justify-center rounded-3xl bg-gradient-to-br from-[#00a3a3]/20 to-[#00a3a3]/5 group-hover:from-[#00a3a3]/30 group-hover:to-[#00a3a3]/10 transition-all duration-500 group-hover:scale-110 animate-pulse-glow relative"
                  style={{ animationDelay: "2s" }}
                >
                  <Globe className="h-16 w-16 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-3xl bg-[#00a3a3]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg sm:text-lg md:text-lg font-black mb-4 group-hover:text-[#00a3a3] transition-colors">Web Systems</h3>
                <p className="text-muted-foreground mb-5 font-semibold text-sm sm:text-sm md:text-sm">User experience layer</p>
                <div className="text-xs sm:text-xs md:text-xs text-muted-foreground space-y-2">
                  <div className="font-medium">→ AI-powered interfaces</div>
                  <div className="font-medium">→ Enterprise scalability</div>
                  <div className="font-medium">→ Secure infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t-2 border-[#00a3a3]/20 bg-gradient-to-br from-[#00a3a3]/10 to-[#00a3a3]/5 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
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
                Ready to Scale{" "}
                <br />
                <span className="text-[#00a3a3] animate-text-gradient bg-gradient-to-r from-[#00a3a3] via-[#00d4d4] to-[#00a3a3] bg-clip-text">
                  Intelligently?
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-12 leading-relaxed">
                Transform your organization with AI systems designed for real-world complexity. We build scalable,
                autonomous solutions that deliver measurable impact from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-xl rounded-full hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-10 py-5 group font-bold"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Start Your Project
                    <Target className="h-6 w-6 group-hover:rotate-90 transition-transform duration-500" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-3 border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/10 text-sm rounded-full px-10 py-5 transition-all duration-500 font-bold shadow-lg hover:shadow-xl bg-transparent"
                >
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
