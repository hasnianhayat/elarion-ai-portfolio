
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function WebEcommercePage() {
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
              <Badge className="mb-6 bg-[#00a3a3]/20 text-[#00a3a3] border-[#00a3a3]">Web Development</Badge>
              <h1 className="text-5xl md:text-6xl font-black text-balance mb-6 animate-slide-in-up">
                AI-Integrated E-Commerce <span className="text-[#00a3a3]">Platform</span>
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8 max-w-3xl animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Intelligent Recommendations & Smart Search for Conversion Growth
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  E-Commerce
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Recommendations
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  Full-Stack Web
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
                A mid-market e-commerce brand with 2000+ SKUs and $15M annual revenue struggled with stagnating
                conversion:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Dated search functionality</strong> using simple keyword matching, leading to poor discovery
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>No personalization</strong> - recommendations were generic "best sellers," not relevant to
                    individuals
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Stagnant metrics:</strong> 2.1% conversion rate, 28% cart abandonment, low AOV
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>Legacy codebase</strong> difficult to extend with modern capabilities
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Use Case */}
          <Card className="border-2 border-border hover:border-[#00a3a3]/50 transition-colors">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-3xl">Solution Overview</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We rebuilt the entire platform with a modern tech stack, intelligent recommendation engine, and semantic
                search.
              </p>
              <div className="space-y-4">
                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🔍 Semantic Search</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Replaced keyword search with vector embeddings and semantic understanding.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Users find products by meaning, not exact keywords</li>
                    <li>• "Waterproof phone case for iPhone 15" matches relevant products instantly</li>
                    <li>• Handles typos, synonyms, and natural language</li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">🎯 Recommendation Engine</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    ML-powered personalization based on user behavior and product similarity.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Collaborative filtering from user browsing/purchase history</li>
                    <li>• Content-based similarity for products users are viewing</li>
                    <li>• Real-time personalization across homepage, product pages, and cart</li>
                  </ul>
                </div>

                <div className="border border-[#00a3a3]/30 rounded-lg p-6 bg-[#00a3a3]/5">
                  <h4 className="font-bold text-lg mb-3 text-[#00a3a3]">💻 Modern Frontend</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Next.js with server components, real-time personalization, and optimized performance.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 85th percentile Lighthouse scores</li>
                    <li>• Mobile-first design for 65% mobile traffic</li>
                    <li>• Real-time inventory sync and dynamic pricing</li>
                  </ul>
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
                  "Next.js",
                  "TensorFlow",
                  "Elasticsearch",
                  "Redis",
                  "AWS",
                  "PostgreSQL",
                  "Python",
                  "Node.js",
                  "Docker",
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
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">34%</p>
                  <p className="font-semibold">AOV Increase</p>
                  <p className="text-sm text-muted-foreground">From $89 to $119 avg</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">+52%</p>
                  <p className="font-semibold">Search Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Customer feedback improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">-28%</p>
                  <p className="font-semibold">Cart Abandonment</p>
                  <p className="text-sm text-muted-foreground">Down to 20.3% rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-[#00a3a3] mb-2">2.8%</p>
                  <p className="font-semibold">Conversion Rate</p>
                  <p className="text-sm text-muted-foreground">Up from 2.1%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-br from-[#00a3a3]/10 to-transparent py-24">
          <div className="container text-center">
            <h2 className="text-4xl font-black mb-6">Transform Your E-Commerce Platform</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Increase conversions and AOV with intelligent search and personalized recommendations.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00a3a3] hover:bg-[#00a3a3]/90 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-[#00a3a3]/40"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
