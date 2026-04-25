"use client";

import { AIHeader } from "@/components/ai-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"
import { PlayCircle, MessageSquare, Calendar, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

const demoOptions = [
  {
    icon: MessageSquare,
    title: "Interactive Agent Demo",
    description: "Chat with a live customer support agent in a sandbox environment",
    duration: "15 minutes",
    availability: "Instant access",
    features: ["Real-time responses", "Knowledge base integration", "Escalation handling", "Multi-turn conversations"],
  },
  {
    icon: PlayCircle,
    title: "Pre-Recorded Walkthrough",
    description: "Watch agents handle real-world scenarios across different industries",
    duration: "20 minutes",
    availability: "On-demand",
    features: [
      "Sales qualification demo",
      "Data processing workflow",
      "Multi-agent collaboration",
      "Analytics dashboard",
    ],
  },
  {
    icon: Calendar,
    title: "Custom Live Demo",
    description: "Schedule a personalized demo with your data and use cases",
    duration: "45-60 minutes",
    availability: "Book appointment",
    features: ["Your specific workflows", "Live Q&A with engineers", "Architecture consultation", "ROI estimation"],
  },
]

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const API_URL = `${API_BASE_URL}/api/contact`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        formType: "ai_consultation", // Matches backend enum
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit demo request");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        useCase: "",
        timeline: "",
      });
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to send demo request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AIHeader />
      <main className="flex-1">
        {/* Hero with Gradient */}
        <section className="ai-gradient-hero py-20 md:py-28 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                See Agents in Action
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance mb-6">
                Experience AI Agents Firsthand
              </h1>
              <p className="text-xl text-white/90 text-balance leading-relaxed">
                Try interactive demos, watch real workflows, or schedule a personalized walkthrough with your team.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Options */}
        <section className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-primary">
            Choose Your Demo Experience
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {demoOptions.map((option, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 transition-all bg-gradient-to-br from-card to-primary/5"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 mb-4">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{option.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {option.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium text-foreground">{option.availability}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-3">INCLUDES</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Demo Limitations */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-primary">
                Understanding Demo vs Production Agents
              </h2>
              <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="font-bold text-lg mb-4 text-primary">Demo Environment</h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Limited to pre-configured scenarios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Sample data only (not your actual systems)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Read-only access to integrations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>No persistent memory or learning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Throttled interaction limits</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4 text-primary">Production Agents</h3>
                      <ul className="space-y-3 text-sm text-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>Fully customized to your workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>Direct integration with your tools & data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>Full read-write permissions (configurable)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>Continuous learning and optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>Unlimited interactions (package-based)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Request Form */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Request a Custom Agent Demo</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your needs and we'll prepare a personalized demonstration.
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-16 w-16 text-primary mb-4 animate-bounce-subtle" />
                    <h3 className="text-2xl font-bold mb-2 text-primary">Demo Request Sent!</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for your interest. Our engineers will review your request and contact you within 24 hours to schedule your personalized demo.
                    </p>
                    <Button asChild className="mt-8 bg-primary" onClick={() => setSubmitted(false)}>
                      <Link href="/ai-agents">Back to AI Agents</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <p className="text-red-500 text-sm font-medium">{error}</p>
                      </div>
                    )}
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-primary">
                          First Name
                        </Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                          className="border-primary/30"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-primary">
                          Last Name
                        </Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          className="border-primary/30"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary">
                        Work Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="border-primary/30"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-primary">
                        Company
                      </Label>
                      <Input 
                        id="company" 
                        placeholder="Acme Inc" 
                        required 
                        className="border-primary/30"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-primary">
                        Your Role
                      </Label>
                      <Input 
                        id="role" 
                        placeholder="VP of Operations" 
                        required 
                        className="border-primary/30"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="useCase" className="text-primary">
                        What workflows do you want to automate?
                      </Label>
                      <Textarea
                        id="useCase"
                        placeholder="Describe your current processes, pain points, and automation goals..."
                        rows={4}
                        required
                        className="border-primary/30"
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-primary">
                        Implementation Timeline
                      </Label>
                      <Input
                        id="timeline"
                        placeholder="e.g., 'Q2 2025' or 'ASAP'"
                        required
                        className="border-primary/30"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                    >
                      {loading ? "Sending Request..." : "Request Demo"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      We'll respond within 24 hours to schedule your personalized demo.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="ai-gradient-section border-y border-primary/20 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-primary">Not Ready for a Demo Yet?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/ai-agents/agent-types">Explore Agent Types</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/ai-agents/packages">View Pricing</Link>
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
      </main>
    </>
  )
}
