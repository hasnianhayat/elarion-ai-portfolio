"use client";

import type React from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import {
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [backendStatus, setBackendStatus] = useState<"checking" | "online" | "offline">("checking");

  // Robust API URL detection with fallback for production
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
    (process.env.NODE_ENV === "production" 
      ? "https://elarion-ai-website-architecture-75d.vercel.app" 
      : "http://localhost:5000");
  const API_URL = `${API_BASE_URL}/api/contact`; 

  // Check if backend is reachable
  useEffect(() => {
    const checkBackend = async () => {
      if (process.env.NODE_ENV === "production") {
        setBackendStatus("online");
        return;
      }

      try {
        const healthUrl = `${API_BASE_URL}/health`;
        const response = await fetch(healthUrl, { 
          method: 'GET',
          cache: 'no-cache'
        });
        
        if (response.ok) {
          setBackendStatus("online");
          console.log("✅ Backend is running on localhost:5000");
        } else {
          setBackendStatus("offline");
        }
      } catch (err) {
        setBackendStatus("offline");
        console.warn("⚠️ Backend not detected on localhost:5000. Make sure your server is running.");
      }
    };

    checkBackend();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Add formType to identify which form this is
      const payload = {
        ...formData,
        formType: "general_contact", // Matches backend enum
      };

      console.log("🌐 Environment:", process.env.NODE_ENV);
      console.log("📡 Sending to:", API_URL);
      console.log("📦 Payload:", payload);

      // Add timeout to fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log("✅ Success:", data);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "general",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (err: any) {
      console.error("❌ Error:", err);
      
      if (err.name === 'AbortError') {
        setError("Request timed out. Please try again.");
      } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError(
          process.env.NODE_ENV === "production"
            ? "Network error. Please try again."
            : "Cannot connect to backend. Make sure your server is running on http://localhost:5000"
        );
      } else {
        setError(err.message || "Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="flex-1">
        <section className="relative overflow-hidden h-screen bg-gradient-to-br from-[#00a3a3]/10 via-background to-[#00a3a3]/5 border-b border-[#00a3a3]/20 py-16 md:py-24">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#00a3a3] bg-[#00a3a3]/10 px-6 py-3 mb-8">
                <Sparkles className="h-5 w-5 text-[#00a3a3]" />
                <span className="text-sm font-semibold text-[#00a3a3]">
                  Let's Connect
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl mb-6">
                Let's <span className="text-[#00a3a3]">Talk</span>
              </h1>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground">
                Ready to explore AI automation or web solutions? Let's discuss
                your challenges together.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[#00a3a3]/20 bg-accent/30 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <div>
                <div className="mb-8">
                  <h2 className="text-lg sm:text-lg md:text-lg font-black mb-3">
                    Start a Conversation
                  </h2>
                  <p className="text-muted-foreground">
                    Share your challenges and let's discover the right solutions
                    together.
                  </p>
                </div>

                {/* Backend Status Indicator - Helpful for development */}
                {process.env.NODE_ENV !== "production" && backendStatus === "offline" && (
                  <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-600">
                      <AlertCircle className="h-4 w-4" />
                      <p className="text-sm">
                        ⚠️ Backend server not detected. Please start your server:
                        <br />
                        <code className="text-xs bg-black/10 px-2 py-1 rounded mt-1 inline-block">
                          cd server && npm run dev
                        </code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Card className="border-2 border-border hover:border-[#00a3a3] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#00a3a3]" />
                    <CardTitle>Send us a Message</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle className="h-10 w-10 text-[#00a3a3] mb-4" />
                      <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground text-xs">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                          <p className="text-red-500 text-sm">{error}</p>
                        </div>
                      )}

                      <div>
                        <Label>Name</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>Company</Label>
                        <Input
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>I'm interested in</Label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="mt-2 w-full rounded-md border px-4 py-2"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="automation">
                            AI Automation Agents
                          </option>
                          <option value="ai">AI & Data Science</option>
                          <option value="web">Web Development</option>
                          <option value="consultation">
                            Strategic Consultation
                          </option>
                        </select>
                      </div>

                      <div>
                        <Label>Message</Label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={5}
                          required
                          className="mt-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#00a3a3] text-white"
                        disabled={loading || backendStatus === "offline"}
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}