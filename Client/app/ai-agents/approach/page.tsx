import { AIHeader } from "@/components/ai-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Shield, Workflow, GitBranch, Eye, Zap, FileCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react"

const approachSteps = [
  {
    number: "01",
    title: "Discovery & Mapping",
    description: "We analyze your workflows to identify automation opportunities",
    details: [
      "Process documentation review",
      "Stakeholder interviews",
      "System integration audit",
      "Use case prioritization",
    ],
    icon: FileCheck,
    color: "from-cyan-500 to-teal-600",
  },
  {
    number: "02",
    title: "Agent Design",
    description: "Custom agent architecture tailored to your specific needs",
    details: [
      "Agent type selection",
      "Workflow orchestration design",
      "Integration planning",
      "Success metrics definition",
    ],
    icon: Brain,
    color: "from-teal-500 to-cyan-600",
  },
  {
    number: "03",
    title: "Safe Deployment",
    description: "Gradual rollout with human oversight and safety guardrails",
    details: [
      "Sandbox testing environment",
      "Pilot deployment",
      "Human-in-the-loop controls",
      "Performance monitoring",
    ],
    icon: Shield,
    color: "from-cyan-600 to-blue-600",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "Ongoing refinement based on real-world performance data",
    details: [
      "Weekly performance reviews",
      "Agent behavior tuning",
      "New capability additions",
      "ROI tracking & reporting",
    ],
    icon: Zap,
    color: "from-teal-600 to-cyan-700",
  },
]

const safetyPrinciples = [
  {
    icon: Eye,
    title: "Human Oversight",
    description: "Critical decisions always route to human review before execution",
  },
  {
    icon: Lock,
    title: "Permission Boundaries",
    description: "Agents operate within strict, configurable permission scopes",
  },
  {
    icon: GitBranch,
    title: "Rollback Capability",
    description: "Every agent action is logged and reversible if needed",
  },
  {
    icon: Shield,
    title: "Gradual Autonomy",
    description: "Agents earn more autonomy as they prove reliability over time",
  },
]

export default function ApproachPage() {
  return (
    <>
      <AIHeader />
      <main className="flex-1">
        {/* Hero with Gradient */}
        <section className="ai-gradient-hero py-20 md:py-28 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Our Methodology
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance mb-6">
                How We Build Reliable AI Agent Systems
              </h1>
              <p className="text-xl text-white/90 text-balance leading-relaxed">
                A proven approach to deploying autonomous agents safely, effectively, and at scale. No black boxes, no
                surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">Autonomy With Control</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              True AI agents must balance independence with accountability. Our approach ensures agents can act
              autonomously while remaining transparent, safe, and aligned with your business goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-primary">Transparent Decision-Making</h3>
                <p className="text-muted-foreground">
                  Every agent action includes explainability—why it made a decision, what data it used, and what
                  alternatives it considered.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-primary">Fail-Safe Architecture</h3>
                <p className="text-muted-foreground">
                  Built-in safety mechanisms prevent agents from making catastrophic errors, with automatic fallbacks
                  and human escalation paths.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-primary">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Agents improve over time by learning from outcomes, user feedback, and edge cases—without requiring
                  constant retraining.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-primary">Integration-First Design</h3>
                <p className="text-muted-foreground">
                  Agents are built to work with your existing tools, not replace them. Seamless integration with CRMs,
                  databases, APIs, and workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Approach Steps */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Our 4-Phase Implementation Process
            </h2>
            <div className="space-y-12">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                      <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Control */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
              Safety & Control Mechanisms
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Autonomous doesn't mean uncontrolled. Every agent system includes built-in safety layers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {safetyPrinciples.map((principle, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 transition-all bg-gradient-to-br from-card to-primary/5"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-center text-lg text-primary">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
              Agent System Architecture
            </h2>
            <div className="mx-auto max-w-4xl">
              <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                        <Workflow className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Layer 1: Input Processing</h3>
                        <p className="text-sm text-muted-foreground">
                          Receives triggers from users, systems, or scheduled events. Validates input and routes to
                          appropriate agent.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Layer 2: Decision Engine</h3>
                        <p className="text-sm text-muted-foreground">
                          Analyzes context, retrieves relevant knowledge, and determines action plan. Includes
                          confidence scoring.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Layer 3: Safety Validation</h3>
                        <p className="text-sm text-muted-foreground">
                          Checks permissions, validates actions against rules, and determines if human approval is
                          needed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Layer 4: Action Execution</h3>
                        <p className="text-sm text-muted-foreground">
                          Executes approved actions via APIs, databases, or other agents. Logs all activity for audit
                          trail.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">Layer 5: Monitoring & Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          Tracks outcomes, collects feedback, and refines future decision-making. Alerts on anomalies.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Ready to Build Your Agent System?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your workflows and design an agent architecture that fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Link href="/ai-agents/demo">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/ai-agents/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
