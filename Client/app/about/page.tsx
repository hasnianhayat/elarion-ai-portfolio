
import { AnimatedBackground } from "@/components/animated-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Shield, TrendingUp, ArrowRight, Sparkles, Code2, Brain, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Khizar Hayat",
    role: "CEO & AI Automation Engineer",
    bio: "Visionary leader with deep expertise in autonomous systems and enterprise automation. Khizar drives Elarion's strategic direction and leads the charge in building next-generation AI agents.",
    expertise: ["AI Automation", "Multi-Agent Systems", "Strategy & Vision"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Muhammad Saad",
    role: "CMO & Web Developer",
    bio: "Full-stack developer and growth strategist who bridges technology and business. Muhammad builds our web platforms and drives market positioning with technical rigor.",
    expertise: ["Web Development", "Full-Stack Architecture", "Growth & Marketing"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Hamza Hayat",
    role: "CTO & AI Engineer",
    bio: "Technical architect focused on production-grade AI systems. Hamza ensures every deployment is reliable, scalable, and meets enterprise standards.",
    expertise: ["AI Engineering", "System Architecture", "Production Reliability"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
]

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden  h-screen bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b border-[#00a3a3]/20 py-16 md:py-24">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8 animate-slide-in-up">
                <Sparkles className="h-5 w-5 text-[#00a3a3]" />
                <span className="text-sm font-semibold text-[#00a3a3]">Meet the Team</span>
              </div>
              <h1
                className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl mb-6 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                About <span className="text-[#00a3a3]">Elarion</span>
              </h1>
              <p
                className="text-sm sm:text-base md:text-base text-muted-foreground text-balance leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                We're an AI automation agency building autonomous agents, AI/Data Science solutions, and modern web
                platforms for forward-thinking enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight text-center mb-12">
              What We <span className="text-[#00a3a3]">Do</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-[#00a3a3]" />
                  </div>
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    AI Automation Agents
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deploy autonomous AI agents that handle complex workflows 24/7 with precision and reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-6 w-6 text-[#00a3a3]" />
                  </div>
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    AI & Data Science
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Build custom AI models, RAG systems, chatbots, and advanced analytics platforms tailored to your
                    needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Code2 className="h-6 w-6 text-[#00a3a3]" />
                  </div>
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    Web Development
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create enterprise-grade web platforms and SaaS products with AI-native architecture and modern
                    design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-y border-[#00a3a3]/20 bg-accent/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-16">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#00a3a3]/10">
                  <Target className="h-7 w-7 text-[#00a3a3]" />
                </div>
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4">Our Vision</h2>
                <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A future where every organization has access to autonomous intelligence—where AI agents handle
                  complexity, automation eliminates friction, and human teams focus on what they do best.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#00a3a3]/10">
                  <Lightbulb className="h-7 w-7 text-[#00a3a3]" />
                </div>
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4">Our Mission</h2>
                <p className="text-sm sm:text-base md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Deliver production-ready AI and automation systems that create measurable business value. We bridge
                  the gap between AI possibility and real-world implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="container py-16 md:py-24">
          <h2 className="text-3xl sm:text-3xl md:text-xl font-black tracking-tight text-center mb-16">
            Meet Our <span className="text-[#00a3a3]">Founders</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="border-2 border-border hover:border-[#00a3a3] hover:shadow-2xl hover:shadow-[#00a3a3]/30 hover:-translate-y-4 transition-all duration-500 group bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 to-transparent">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-1 group-hover:text-[#00a3a3] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#00a3a3] font-semibold mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full bg-[#00a3a3]/10 px-3 py-1 text-xs font-semibold text-[#00a3a3] group-hover:bg-[#00a3a3]/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-[#00a3a3]/20 bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
              Our <span className="text-[#00a3a3]">Values</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <Shield className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    Reliability Over Hype
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We build systems that work consistently in production, not impressive demos that fail under
                    real-world conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <Target className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    Measurable Impact
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We focus on outcomes and business value. Every project defines clear success metrics and we measure
                    our work by the value it creates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <Lightbulb className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    Innovation & Pragmatism
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We stay at the forefront of AI technology but apply it pragmatically. The goal is solving your
                    problems efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <TrendingUp className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg sm:text-lg md:text-lg font-black mb-3 group-hover:text-[#00a3a3] transition-colors duration-300">
                    Continuous Improvement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    AI systems should get better over time. We build feedback loops and monitoring so your systems
                    continuously improve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black tracking-tight mb-6">Let's build the future together</h2>
            <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-10 text-balance leading-relaxed">
              Whether you're exploring AI automation, need custom AI development, or want to build modern web platforms,
              we're ready to partner with you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-xl rounded-full hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-sm px-10 py-5 font-bold"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
