
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function AdvancedAutomationPage() {
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
              <Badge className="mb-6 bg-[#00a3a3]/20 text-[#00a3a3] border-[#00a3a3]">Automation</Badge>
              <h1 className="text-5xl md:text-6xl font-black text-balance mb-6 animate-slide-in-up">
                Advanced Workflow <span className="text-[#00a3a3]">Automation</span>
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8 max-w-3xl animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Enterprise Operations Transformation through Intelligent Process Automation
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Enterprise
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Operations
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Process Automation
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
                A multinational corporation with 5,000+ employees across 12 divisions was struggling with fragmented,
                manual workflows. Their operations team was:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Spending 320+ hours monthly</strong> on repetitive data entry and document processing across
                    disparate systems
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Managing 15+ disconnected tools</strong> with no unified orchestration or visibility
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Experiencing 12% error rates</strong> due to manual processing and system incompatibilities
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Unable to scale operations</strong> without proportional increases in headcount
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use Case */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl">Use Case & Scope</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">Primary Workflows Automated:</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-[#00a3a3] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Invoice Processing:</strong> Capture, validation, and posting to accounting system
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-[#00a3a3] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Employee Onboarding:</strong> Document processing, system provisioning, notification
                      workflows
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-[#00a3a3] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Report Generation:</strong> Data extraction from multiple sources, consolidation,
                      distribution
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Zap className="h-5 w-5 text-[#00a3a3] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Compliance Workflows:</strong> Document archival, audit trail maintenance, regulatory
                      reporting
                    </span>
                  </li>
                </ul>
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
                We designed and implemented a comprehensive automation ecosystem that unified their workflows while
                maintaining system independence:
              </p>
              <div className="space-y-4">
                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🔧 Architecture Foundation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>n8n</strong> as central orchestration platform with 200+ pre-built connectors
                    </li>
                    <li>
                      • <strong>Custom Python modules</strong> for complex business logic and transformations
                    </li>
                    <li>
                      • <strong>PostgreSQL</strong> for workflow state management and audit logging
                    </li>
                    <li>
                      • <strong>API gateways</strong> for secure system integration and monitoring
                    </li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">📊 Integration Points</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>SAP ERP</strong> for core business processes
                    </li>
                    <li>
                      • <strong>Salesforce</strong> for CRM and customer data
                    </li>
                    <li>
                      • <strong>SharePoint</strong> for document management
                    </li>
                    <li>
                      • <strong>Slack, Email, Teams</strong> for notifications and approvals
                    </li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🛡️ Implementation Phases</h4>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>
                      <strong>Phase 1:</strong> Invoice processing pilot (2 weeks) - 40% of manual hours
                    </li>
                    <li>
                      <strong>Phase 2:</strong> Onboarding automation (3 weeks) - HR team empowerment
                    </li>
                    <li>
                      <strong>Phase 3:</strong> Reporting & compliance (2 weeks) - Governance layer
                    </li>
                    <li>
                      <strong>Phase 4:</strong> Optimization & scaling (ongoing) - Continuous improvement
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
                  "n8n",
                  "Python",
                  "PostgreSQL",
                  "REST APIs",
                  "Webhooks",
                  "OAuth 2.0",
                  "Docker",
                  "Kubernetes",
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
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">320+</p>
                  <p className="font-semibold">Hours Saved Monthly</p>
                  <p className="text-sm text-muted-foreground">40 FTE reduction equivalent</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">45%</p>
                  <p className="font-semibold">Cost Reduction</p>
                  <p className="text-sm text-muted-foreground">Annual operational savings</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">99.8%</p>
                  <p className="font-semibold">Error Reduction</p>
                  <p className="text-sm text-muted-foreground">Down from 12% manual error rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">2x</p>
                  <p className="font-semibold">Process Velocity</p>
                  <p className="text-sm text-muted-foreground">Faster end-to-end execution</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-4xl font-black mb-6">Let's Automate Your Operations</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how intelligent automation can transform your workflows and reduce manual work.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
