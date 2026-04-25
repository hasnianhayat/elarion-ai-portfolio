import { AIHeader } from "@/components/ai-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import {
  Bot,
  MessageSquare,
  Database,
  LineChart,
  ShoppingCart,
  Users,
  FileText,
  Calendar,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react"

const agentTypes = [
  {
    icon: MessageSquare,
    name: "Customer Support Agents",
    purpose: "Handle customer inquiries, resolve issues, and escalate complex cases",
    capabilities: [
      "Multi-channel support (chat, email, social)",
      "Ticket classification & routing",
      "Knowledge base retrieval",
      "Sentiment analysis",
      "Automated responses with human handoff",
    ],
    inputs: "Customer messages, tickets, support history",
    outputs: "Responses, escalations, satisfaction scores",
    industries: ["SaaS", "E-commerce", "Financial Services", "Healthcare"],
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: ShoppingCart,
    name: "Sales Agents",
    purpose: "Qualify leads, schedule demos, and guide prospects through sales funnels",
    capabilities: [
      "Lead qualification & scoring",
      "Meeting scheduling & reminders",
      "Product recommendations",
      "Objection handling",
      "CRM integration & updates",
    ],
    inputs: "Lead data, conversation history, CRM records",
    outputs: "Qualified leads, booked meetings, pipeline updates",
    industries: ["B2B SaaS", "Real Estate", "Insurance", "Consulting"],
    color: "from-cyan-600 to-blue-600",
  },
  {
    icon: Database,
    name: "Data Processing Agents",
    purpose: "Extract, transform, and load data across systems autonomously",
    capabilities: [
      "Data extraction from multiple sources",
      "Validation & quality checks",
      "Schema transformation",
      "Automated reporting",
      "Anomaly detection",
    ],
    inputs: "Raw data, API feeds, databases, files",
    outputs: "Cleaned datasets, reports, alerts",
    industries: ["Finance", "Healthcare", "Logistics", "Manufacturing"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: LineChart,
    name: "Analytics Agents",
    purpose: "Monitor KPIs, generate insights, and trigger actions based on data patterns",
    capabilities: [
      "Real-time metric monitoring",
      "Trend analysis & forecasting",
      "Automated reporting",
      "Alert generation",
      "Insight recommendations",
    ],
    inputs: "Business metrics, time-series data, logs",
    outputs: "Reports, insights, alerts, visualizations",
    industries: ["E-commerce", "SaaS", "Media", "Finance"],
    color: "from-cyan-500 to-indigo-600",
  },
  {
    icon: FileText,
    name: "Document Agents",
    purpose: "Process, analyze, and generate documents at scale",
    capabilities: [
      "Document classification",
      "Information extraction",
      "Contract analysis",
      "Report generation",
      "Compliance checking",
    ],
    inputs: "PDFs, contracts, forms, invoices",
    outputs: "Structured data, summaries, alerts",
    industries: ["Legal", "Finance", "Insurance", "Government"],
    color: "from-teal-600 to-cyan-700",
  },
  {
    icon: Calendar,
    name: "Workflow Orchestration Agents",
    purpose: "Coordinate multi-step processes across teams and systems",
    capabilities: [
      "Task delegation & tracking",
      "Approval workflows",
      "System integration",
      "Progress monitoring",
      "Deadline management",
    ],
    inputs: "Workflow definitions, task status, system events",
    outputs: "Executed workflows, status updates, completions",
    industries: ["Operations", "HR", "Project Management", "IT"],
    color: "from-cyan-600 to-slate-700",
  },
]

export default function AgentTypesPage() {
  return (
    <>
      <AIHeader />
      <main className="flex-1">
        {/* Hero with Gradient */}
        <section className="ai-gradient-hero py-20 md:py-28 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Specialized AI Agents
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance mb-6">
                Agent Types Built for Every Business Function
              </h1>
              <p className="text-xl text-white/90 text-balance leading-relaxed">
                Pre-trained, domain-specific agents ready to integrate into your operations. Each type is specialized
                for specific tasks and industries.
              </p>
            </div>
          </div>
        </section>

        {/* Agent Types Grid */}
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {agentTypes.map((agent, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card to-primary/5"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${agent.color} shadow-lg`}
                    >
                      <agent.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {agent.industries.length}+ Industries
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-primary">{agent.name}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{agent.purpose}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                      <Zap className="h-4 w-4" />
                      Core Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Inputs</p>
                      <p className="text-sm text-muted-foreground">{agent.inputs}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Outputs</p>
                      <p className="text-sm text-muted-foreground">{agent.outputs}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Multi-Agent Systems */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">Multi-Agent Systems</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agents work best in teams. Combine multiple agent types to create sophisticated, autonomous workflows.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Collaborative</h3>
                  <p className="text-sm text-muted-foreground">
                    Agents share context and delegate tasks to specialists
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Supervised</h3>
                  <p className="text-sm text-muted-foreground">Human-in-the-loop controls for critical decisions</p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-primary">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Add or remove agents as your needs evolve</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Ready to Deploy Specialized Agents?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore pre-built packages or design a custom agent system tailored to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Link href="/ai-agents/packages">
                  View Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/ai-agents/demo">Request Custom Agent</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter/>
    </>
  )
}
