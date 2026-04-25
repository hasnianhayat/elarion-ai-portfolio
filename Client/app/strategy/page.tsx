
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Lightbulb, Beaker, Rocket, TrendingUp, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StrategyPage() {
  const phases = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      subtitle: "Understanding your landscape",
      description:
        "We conduct deep stakeholder interviews, process mapping, and technical assessments. We identify where AI, automation, and modern development create the highest impact and define clear, measurable success metrics.",
      details: [
        "Stakeholder interviews and workshops",
        "Current process documentation",
        "Pain point and opportunity analysis",
        "Success metric definition",
        "Technology landscape assessment",
      ],
    },
    {
      icon: Lightbulb,
      title: "Strategy & Architecture Design",
      subtitle: "Building the blueprint",
      description:
        "We design comprehensive solutions across all three service pillars: AI agent strategies, data architecture, ML pipelines, and web platform specifications. Everything is modular, scalable, and aligned with your existing systems.",
      details: [
        "Multi-agent orchestration design",
        "Data pipeline architecture",
        "ML model selection & training strategy",
        "Web platform technical specification",
        "Integration planning & API design",
      ],
    },
    {
      icon: Beaker,
      title: "Proof of Concept",
      subtitle: "Validating the approach",
      description:
        "Before full commitment, we build focused POCs to validate core assumptions. This includes working agents on real data, prototype UIs, and integration tests. We measure outcomes against hypotheses and refine before scaling.",
      details: [
        "Single-agent or feature POC (2-3 weeks)",
        "Real data testing and validation",
        "Integration testing with your systems",
        "Performance & accuracy benchmarking",
        "Team feedback & iteration cycles",
      ],
    },
    {
      icon: Rocket,
      title: "Production Development",
      subtitle: "Building for scale",
      description:
        "Full development with enterprise standards: comprehensive error handling, monitoring, logging, security hardening, and comprehensive testing. We include complete documentation, team training, and runbooks for your operations team.",
      details: [
        "Production-grade implementation",
        "Error handling & edge case management",
        "Security audit & hardening",
        "Comprehensive test coverage (unit, integration, e2e)",
        "Documentation & team training",
      ],
    },
    {
      icon: TrendingUp,
      title: "Deployment & Optimization",
      subtitle: "Going live with confidence",
      description:
        "We manage the full deployment lifecycle with monitoring, performance tuning, and gradual rollout strategies. Post-launch, we track KPIs, gather user feedback, and continuously optimize the system.",
      details: [
        "Staging & QA environment setup",
        "Gradual rollout & canary deployments",
        "Real-time monitoring & alerting",
        "Performance optimization",
        "User feedback loops & rapid iteration",
      ],
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support & Evolution",
      subtitle: "Continuous improvement",
      description:
        "Our engagement doesn't end at launch. We provide 24/7 support, model retraining, system enhancements, and strategic optimization. Your systems improve over time, not degrade.",
      details: [
        "24/7 production support",
        "Model retraining & fine-tuning",
        "Performance monitoring & optimization",
        "Feature enhancements & roadmap planning",
        "Knowledge transfer to your team",
      ],
    },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-screen bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b-2 border-[#00a3a3]/20 py-24 md:py-32">
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
                <span className="text-sm font-semibold text-[#00a3a3]">Proven Methodology</span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-black tracking-tight sm:text-7xl text-balance mb-8 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Our Strategy & <span className="text-[#00a3a3]">Approach</span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-base text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto animate-slide-in-up mb-10"
                style={{ animationDelay: "0.2s" }}
              >
                Transparent, systematic, and focused on delivering production-ready intelligent systems across AI
                agents, data science, and web development that create measurable value.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container py-24 md:py-32">
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-[#00a3a3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00a3a3]/20 group bg-card/50 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00a3a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#00a3a3]/15 group-hover:bg-[#00a3a3]/25 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#00a3a3]/40">
                        <IconComponent className="h-8 w-8 text-[#00a3a3] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-[#00a3a3]/20 text-[#00a3a3] border-[#00a3a3] text-xs">
                            Phase {index + 1}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg sm:text-lg md:text-lg font-black group-hover:text-[#00a3a3] transition-colors duration-300">
                          {phase.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 font-semibold">{phase.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-sm md:text-sm">{phase.description}</p>

                    <div className="border-t border-border pt-6">
                      <h4 className="font-bold text-sm uppercase tracking-wide text-[#00a3a3] mb-4">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-2 w-2 rounded-full bg-[#00a3a3] mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="border-y border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3a3]/20">
                  <Shield className="h-8 w-8 text-[#00a3a3]" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-black tracking-tight text-center mb-8">
                Ethical AI, Responsible Automation, & Technical Excellence
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base">
                <p>
                  We believe intelligent systems should augment human capability, not replace human judgment in critical
                  decisions. Every system we build includes proper oversight, explainability, and human-in-the-loop
                  mechanisms where appropriate. We prioritize transparency, data privacy, and bias mitigation—our
                  systems are designed with clear boundaries, failure modes, and escalation paths. We don't build black
                  boxes; we build intelligent tools that humans can understand, trust, and control.
                </p>
                <p>
                  Automation should create value, not chaos. We focus on reliability, predictability, and graceful
                  degradation. Our systems are built to handle edge cases, recover from failures, and maintain data
                  integrity. We use industry best practices for error handling, security, and monitoring. Your
                  operations become more efficient and your team becomes more effective—not dependent on fragile
                  technology.
                </p>
                <p>
                  Technical excellence is non-negotiable. We follow clean code principles, comprehensive testing
                  strategies, proper documentation, and continuous improvement. Every project includes knowledge
                  transfer, so your team can maintain and evolve the systems long-term. We're committed to building
                  solutions that last, scale, and improve over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Elarion Section */}
        <section className="container py-24 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black mb-12 text-center">Why Partner with Elarion?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Unified Expertise",
                  description:
                    "We combine AI agents, data science, and web development. Your entire intelligent system ecosystem built by a cohesive team with shared architectural vision.",
                },
                {
                  title: "Production-Ready",
                  description:
                    "Not prototypes or experiments. Everything we build is production-grade from day one with proper error handling, monitoring, security, and documentation.",
                },
                {
                  title: "Transparent Engagement",
                  description:
                    "Clear phases, defined success metrics, and regular communication. We show our work, explain our decisions, and adjust based on your feedback.",
                },
                {
                  title: "Long-Term Partnership",
                  description:
                    "We don't disappear after launch. We provide ongoing support, optimization, and evolution. Your success is our success.",
                },
                {
                  title: "Industry Experience",
                  description:
                    "We've solved complex problems across healthcare, fintech, SaaS, and e-commerce. We bring proven patterns and avoid common pitfalls.",
                },
                {
                  title: "Team Empowerment",
                  description:
                    "We transfer knowledge to your team. You own the system, we guide the evolution. Not locked into vendor dependency.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border-2 border-border hover:border-[#00a3a3] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3a3]/20 group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-lg md:text-lg group-hover:text-[#00a3a3] transition-colors">
                      <div className="h-2 w-2 rounded-full bg-[#00a3a3]" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-sm md:text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black mb-6 text-balance">Ready to Transform Your Organization?</h2>
            <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your challenges and how our unified approach to AI, automation, and development can solve
              them.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl rounded-full hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-10 py-5"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/5 text-sm px-10 py-5 transition-all duration-300 bg-transparent font-bold shadow-none rounded-full"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
