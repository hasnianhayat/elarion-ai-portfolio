
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ChatbotPage() {
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
              <Badge className="mb-6 bg-[#00a3a3]/20 text-[#00a3a3] border-[#00a3a3]">AI & Data Science</Badge>
              <h1 className="text-5xl md:text-6xl font-black text-balance mb-6 animate-slide-in-up">
                Enterprise RAG Knowledge <span className="text-[#00a3a3]">Assistant</span>
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8 max-w-3xl animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Semantic Search & Intelligent Document Retrieval System
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Healthcare
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Knowledge Management
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  RAG
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
                A 200+ person healthcare organization with complex compliance requirements struggled with knowledge
                accessibility:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>3,000+ documents</strong> including policies, procedures, medical research, and regulatory
                    guidance
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Staff spending hours</strong> searching manual filing systems and shared drives
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Inconsistent answers</strong> due to outdated document reliance and manual searching
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Compliance risk</strong> when staff couldn't find current procedures for audit trails
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use Case */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl">Solution Architecture</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🏗️ System Design</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A Retrieval-Augmented Generation (RAG) system combining semantic search with LLM intelligence for
                  accurate, sourced answers.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-[#00a3a3] font-bold">1.</span>
                    <div>
                      <p className="font-semibold">Document Ingestion</p>
                      <p className="text-xs text-muted-foreground">PDFs, DOCX, plain text parsed and cleaned</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00a3a3] font-bold">2.</span>
                    <div>
                      <p className="font-semibold">Embedding & Indexing</p>
                      <p className="text-xs text-muted-foreground">OpenAI embeddings + Pinecone vector database</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00a3a3] font-bold">3.</span>
                    <div>
                      <p className="font-semibold">Semantic Search</p>
                      <p className="text-xs text-muted-foreground">User queries matched to relevant document chunks</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#00a3a3] font-bold">4.</span>
                    <div>
                      <p className="font-semibold">LLM Generation</p>
                      <p className="text-xs text-muted-foreground">GPT-4 synthesizes answer with source citations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">👥 User Interface</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Web Portal:</strong> Conversational interface with document citations
                  </li>
                  <li>
                    • <strong>Slack Integration:</strong> Ask questions directly in team channels
                  </li>
                  <li>
                    • <strong>Mobile App:</strong> iOS/Android for field staff
                  </li>
                  <li>
                    • <strong>Admin Dashboard:</strong> Document management and usage analytics
                  </li>
                </ul>
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
                  "OpenAI GPT-4",
                  "OpenAI Embeddings",
                  "Pinecone",
                  "LangChain",
                  "FastAPI",
                  "React",
                  "PostgreSQL",
                  "Docker",
                  "AWS Lambda",
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
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">85%</p>
                  <p className="font-semibold">Search Time Reduction</p>
                  <p className="text-sm text-muted-foreground">Minutes to seconds</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">10x</p>
                  <p className="font-semibold">Faster Access</p>
                  <p className="text-sm text-muted-foreground">Improved productivity</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">40%</p>
                  <p className="font-semibold">Satisfaction Increase</p>
                  <p className="text-sm text-muted-foreground">Staff approval rating</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">100%</p>
                  <p className="font-semibold">Compliance Coverage</p>
                  <p className="text-sm text-muted-foreground">Audit trail maintained</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-4xl font-black mb-6">Build Your Knowledge System</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your organizational knowledge into instantly accessible, AI-powered intelligence.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Discuss Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
