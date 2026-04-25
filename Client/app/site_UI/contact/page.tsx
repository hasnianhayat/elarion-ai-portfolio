"use client";

import type React from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle,
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

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

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
      setError(err.message || "Failed to send message");
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

        <section className="border-y border-[#00a3a3]/20 bg-accent/30 py-16 md:py-24">
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
                        <p className="text-red-500 text-sm">{error}</p>
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
                        disabled={loading}
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