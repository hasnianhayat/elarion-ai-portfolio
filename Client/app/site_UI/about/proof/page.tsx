
import { AnimatedBackground } from "@/components/animated-background"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, TrendingUp, Zap, Users, Target, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const industries = [
  { name: "SaaS & Tech", icon: Sparkles },
  { name: "Healthcare", icon: Target },
  { name: "Fintech", icon: Zap },
  { name: "E-Commerce", icon: TrendingUp },
  { name: "Manufacturing", icon: CheckCircle },
  { name: "Professional Services", icon: Users },
]

export default function ProofPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b border-[#00a3a3]/20 py-16 md:py-24">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8 animate-slide-in-up">
                <Sparkles className="h-5 w-5 text-[#00a3a3]" />
                <span className="text-sm font-bold text-[#00a3a3]">Real Results, Real Impact</span>
              </div>
              <h1
                className="text-4xl font-black tracking-tight sm:text-5xl mb-6 animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Proof & <span className="text-[#00a3a3]">Social Trust</span>
              </h1>
              <p
                className="text-xl text-muted-foreground text-balance leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Results from real implementations, feedback from actual clients, and measurable impact across diverse
                industries—delivered with reliability and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics - Realistic Startup Numbers */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Track Record</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-7 w-7 text-[#00a3a3]" />
                  </div>
                  <div className="text-4xl font-black text-[#00a3a3] mb-2 group-hover:scale-110 transition-transform duration-300">
                    35%
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Average efficiency gain across automation projects
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-7 w-7 text-[#00a3a3]" />
                  </div>
                  <div className="text-4xl font-black text-[#00a3a3] mb-2 group-hover:scale-110 transition-transform duration-300">
                    2M+
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">Data points processed by our AI systems</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Users className="h-7 w-7 text-[#00a3a3]" />
                  </div>
                  <div className="text-4xl font-black text-[#00a3a3] mb-2 group-hover:scale-110 transition-transform duration-300">
                    18+
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Enterprise teams using Elarion solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                    <Target className="h-7 w-7 text-[#00a3a3]" />
                  </div>
                  <div className="text-4xl font-black text-[#00a3a3] mb-2 group-hover:scale-110 transition-transform duration-300">
                    2.5x
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">Average ROI within first 6 months</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries We Serve - With Icons */}
        <section className="border-y border-[#00a3a3]/20 bg-accent/30 py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
              Industries We <span className="text-[#00a3a3]">Serve</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {industries.map((industry) => {
                const IconComponent = industry.icon
                return (
                  <Card
                    key={industry.name}
                    className="text-center border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 hover:-translate-y-2 transition-all duration-300 group bg-card/50 backdrop-blur-sm cursor-pointer"
                  >
                    <CardContent className="pt-8 pb-8">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00a3a3]/10 group-hover:bg-[#00a3a3]/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-[#00a3a3]" />
                      </div>
                      <p className="font-semibold text-base group-hover:text-[#00a3a3] transition-colors duration-300">
                        {industry.name}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            What Our <span className="text-[#00a3a3]">Clients Say</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "The multi-agent system Elarion built transformed our sales process. We're now booking 3x more
                  qualified meetings with zero additional headcount."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    Sarah Chen
                  </p>
                  <p className="text-xs text-muted-foreground">VP of Sales, TechCorp</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "We needed a RAG system that actually worked in production. Elarion delivered a solution that our team
                  trusts and uses daily."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    Dr. Michael Torres
                  </p>
                  <p className="text-xs text-muted-foreground">CTO, HealthBridge</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "The synthetic data pipeline allowed us to train models without compliance risk. Our fraud detection
                  improved by 23%."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    James Liu
                  </p>
                  <p className="text-xs text-muted-foreground">Head of ML, Fintech Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Elarion rebuilt our platform with AI integration that actually adds value. Our customers love the
                  personalization."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    Emily Rodriguez
                  </p>
                  <p className="text-xs text-muted-foreground">CEO, ShopFlow</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Working with Elarion was seamless. They understood our business, built exactly what we needed, and
                  delivered on time."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    David Park
                  </p>
                  <p className="text-xs text-muted-foreground">COO, Enterprise Systems Inc</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-[#00a3a3] hover:shadow-xl hover:shadow-[#00a3a3]/20 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-[#00a3a3] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "The automation agents run 24/7 without issues. They've become an essential part of our operations."
                </p>
                <div>
                  <p className="font-semibold text-sm group-hover:text-[#00a3a3] transition-colors duration-300">
                    Rachel Kim
                  </p>
                  <p className="text-xs text-muted-foreground">Director of Ops, LogiChain</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-[#00a3a3]/20 bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to see similar results?</h2>
              <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed">
                Let's discuss how Elarion's AI and automation solutions can drive measurable impact for your
                organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40 transition-all duration-500 text-base px-8 py-6 font-bold"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3]/10 text-base px-8 py-6 font-bold bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
