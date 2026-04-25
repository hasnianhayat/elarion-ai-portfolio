import { AIHeader } from "@/components/ai-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check, Sparkles, Rocket, Building2, ArrowRight } from "lucide-react"

const packages = [
  {
    name: "Starter",
    icon: Sparkles,
    description: "Perfect for small teams testing agent automation",
    price: "Custom",
    priceSubtext: "Starting at $2,500/month",
    features: [
      "1 specialized agent type",
      "Up to 5,000 interactions/month",
      "Email & chat support",
      "Standard integrations (5)",
      "Monthly performance reports",
      "48-hour response SLA",
      "Basic customization",
    ],
    notIncluded: ["Multi-agent orchestration", "Custom model training", "Dedicated support team"],
    highlight: false,
    cta: "Start Trial",
    idealFor: ["Small businesses", "Single department", "Proof of concept"],
  },
  {
    name: "Professional",
    icon: Rocket,
    description: "Full-featured agent systems for growing companies",
    price: "Custom",
    priceSubtext: "Starting at $8,500/month",
    features: [
      "Up to 3 specialized agent types",
      "Up to 25,000 interactions/month",
      "Priority support (24/7)",
      "Advanced integrations (15+)",
      "Multi-agent collaboration",
      "Weekly performance reports",
      "4-hour response SLA",
      "Advanced customization",
      "A/B testing & optimization",
      "Custom workflows",
    ],
    notIncluded: ["Dedicated account manager", "On-premise deployment"],
    highlight: true,
    cta: "Get Started",
    idealFor: ["Growing companies", "Multiple departments", "Complex workflows"],
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Mission-critical agent infrastructure with full customization",
    price: "Custom",
    priceSubtext: "Contact for pricing",
    features: [
      "Unlimited agent types",
      "Unlimited interactions",
      "Dedicated support team",
      "Custom integrations",
      "Full multi-agent orchestration",
      "Real-time analytics dashboard",
      "1-hour response SLA",
      "White-label options",
      "Custom model training",
      "On-premise deployment available",
      "Dedicated account manager",
      "SLA guarantees",
      "Security & compliance review",
      "Custom contract terms",
    ],
    notIncluded: [],
    highlight: false,
    cta: "Contact Sales",
    idealFor: ["Large enterprises", "Mission-critical systems", "Custom requirements"],
  },
]

export default function PackagesPage() {
  return (
    <>
      <AIHeader />
      <main className="flex-1">
        {/* Hero with Gradient */}
        <section className="ai-gradient-hero py-20 md:py-28 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Flexible Pricing
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance mb-6">
                Agent Packages Built for Every Scale
              </h1>
              <p className="text-xl text-white/90 text-balance leading-relaxed">
                From startup MVPs to enterprise-grade autonomous systems. Choose a package that fits your needs today
                and scales with you.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.highlight
                    ? "border-2 border-primary shadow-xl shadow-primary/20 lg:scale-105"
                    : "border-2 border-primary/20 hover:border-primary/40"
                } transition-all bg-gradient-to-br from-card to-primary/5`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground shadow-lg px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${
                      pkg.highlight ? "bg-primary shadow-lg shadow-primary/30" : "bg-primary/20"
                    }`}
                  >
                    <pkg.icon className={`h-8 w-8 ${pkg.highlight ? "text-white" : "text-primary"}`} />
                  </div>
                  <CardTitle className="text-2xl text-primary">{pkg.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mt-2">{pkg.description}</CardDescription>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground mt-1">{pkg.priceSubtext}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-primary mb-3">INCLUDED</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground mb-3">NOT INCLUDED</p>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-muted-foreground">×</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-2">IDEAL FOR</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.idealFor.map((use, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                        : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                    }`}
                    size="lg"
                  >
                    <Link href="/ai-agents/demo">
                      {pkg.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
                Need Something Custom?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every business is unique. We can design agent systems tailored to your specific workflows, integrations,
                and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/ai-agents/demo">Schedule Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/ai-agents/approach">Learn Our Approach</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">What's included in "interactions"?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    An interaction is any meaningful exchange where an agent processes input and takes action—answering
                    a question, updating a record, routing a ticket, etc. Simple status checks don't count.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Can I upgrade or downgrade packages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. You can change packages at any time. Upgrades take effect immediately; downgrades apply at the
                    next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">How long does implementation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Starter: 2-3 weeks. Professional: 4-6 weeks. Enterprise: 8-12 weeks depending on complexity. All
                    packages include full onboarding and training.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">What happens if I exceed interaction limits?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll notify you before you hit your limit. You can purchase additional interaction blocks or
                    upgrade to a higher tier. Agents never shut off unexpectedly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
