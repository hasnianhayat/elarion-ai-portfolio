
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AgentAutomationPage() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00a3a3]/15 via-background to-background border-b-2 border-[#00a3a3]/20 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#00a3a3]/10 blur-3xl animate-particle-float" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-[#00a3a3]/20 text-[#00a3a3] border-[#00a3a3]">AI Agents</Badge>
              <h1 className="text-5xl md:text-6xl font-black text-balance mb-6 animate-slide-in-up">
                Multi-Agent Sales <span className="text-[#00a3a3]">Automation</span>
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8 max-w-3xl animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Autonomous Sales Pipeline Management with Specialized Intelligence
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  SaaS
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Sales
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  AI Agents
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container py-24 md:py-32 space-y-16">
          {/* Problem */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500 font-bold">
                  ⚠
                </span>
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A fast-growing B2B SaaS company (Series B) with a 25-person sales team faced critical bottlenecks:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>40+ hours weekly</strong> spent on manual lead qualification and email follow-ups
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Inconsistent qualification criteria</strong> leading to unqualified meetings and wasted time
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Weekend/after-hours leads slipping</strong> because there was no one to follow up
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Sales team frustrated</strong> with repetitive tasks instead of closing deals
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use Case */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl">Use Case & Agent Design</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">Three Specialized Agents:</h4>
                <div className="space-y-4">
                  <div className="border border-[#00a3a3]/30 rounded-lg p-4 bg-[#00a3a3]/5">
                    <h5 className="font-bold mb-2">🔍 Lead Qualification Agent</h5>
                    <p className="text-sm text-muted-foreground">
                      Analyzes inbound leads against custom rubrics (company size, industry, budget, decision
                      authority). Makes qualify/disqualify/revisit decisions based on conversation.
                    </p>
                  </div>
                  <div className="border border-[#00a3a3]/30 rounded-lg p-4 bg-[#00a3a3]/5">
                    <h5 className="font-bold mb-2">📧 Email Follow-Up Agent</h5>
                    <p className="text-sm text-muted-foreground">
                      Sends personalized follow-up sequences based on lead behavior. Adjusts messaging based on
                      engagement signals and writes natural, compelling emails.
                    </p>
                  </div>
                  <div className="border border-[#00a3a3]/30 rounded-lg p-4 bg-[#00a3a3]/5">
                    <h5 className="font-bold mb-2">📅 Meeting Scheduler Agent</h5>
                    <p className="text-sm text-muted-foreground">
                      Coordinates calendars via calendar APIs, suggests best times, sends meeting prep materials.
                      Handles rescheduling and follow-ups automatically.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 text-green-500 font-bold">
                  ✓
                </span>
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deployed a coordinated multi-agent system with human oversight and continuous learning:
              </p>
              <div className="space-y-4">
                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">⚙️ Architecture</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>LangChain</strong> framework for agent orchestration and state management
                    </li>
                    <li>
                      • <strong>GPT-4</strong> as the reasoning engine with custom system prompts
                    </li>
                    <li>
                      • <strong>n8n</strong> for workflow automation between agents
                    </li>
                    <li>
                      • <strong>Salesforce API</strong> integration for CRM sync and real-time updates
                    </li>
                    <li>
                      • <strong>Human review queue</strong> for edge cases and learning feedback
                    </li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🔄 Integration Points</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Salesforce</strong> - Lead data, account info, deal pipeline
                    </li>
                    <li>
                      • <strong>Gmail API</strong> - Email sending and open/click tracking
                    </li>
                    <li>
                      • <strong>Calendar APIs</strong> - Sales reps' calendars for scheduling
                    </li>
                    <li>
                      • <strong>Slack</strong> - Daily reports and urgent escalations
                    </li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🎯 Implementation Strategy</h4>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>
                      <strong>Week 1-2:</strong> Integration setup and agent calibration
                    </li>
                    <li>
                      <strong>Week 3:</strong> Pilot with 5 sales reps and 100 leads
                    </li>
                    <li>
                      <strong>Week 4-5:</strong> Refinement based on human feedback
                    </li>
                    <li>
                      <strong>Week 6+:</strong> Full rollout with 24/7 operation
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "LangChain",
                  "GPT-4",
                  "n8n",
                  "Salesforce API",
                  "FastAPI",
                  "PostgreSQL",
                  "Gmail API",
                  "OAuth 2.0",
                  "Monitoring: Datadog",
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="py-3 text-center justify-center">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-2 border-[#00a3a3] bg-[#00a3a3]/5">
            <CardHeader className="border-b border-[#00a3a3]/20">
              <CardTitle className="text-3xl flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00a3a3]/20 text-[#00a3a3] font-bold">
                  📈
                </span>
                Results & Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">67%</p>
                  <p className="font-semibold">Manual Time Reduced</p>
                  <p className="text-sm text-muted-foreground">26 hours/week saved</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">3x</p>
                  <p className="font-semibold">Meetings Booked</p>
                  <p className="text-sm text-muted-foreground">Up from 2 to 6 per rep daily</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">45%</p>
                  <p className="font-semibold">Lead Quality Improvement</p>
                  <p className="text-sm text-muted-foreground">Higher conversion rates</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">24/7</p>
                  <p className="font-semibold">Autonomous Operation</p>
                  <p className="text-sm text-muted-foreground">No weekend/night bottlenecks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-4xl font-black mb-6">Deploy Intelligent Sales Agents</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our AI agents handle the repetitive work so your team can focus on closing deals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Agent Implementation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
