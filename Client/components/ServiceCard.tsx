// import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: Feature[];
  linkText: string;
  linkHref: string;
  animationDelay?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  linkText,
  linkHref,
  animationDelay = "0s",
}: ServiceCardProps) {
  return (
    <CometCard rotateDepth={10} translateDepth={15}>
      <Card className="h-full border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group bg-card/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardContent className="pt-10 pb-10 relative z-10">
          <div
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 animate-float group-hover:animate-scale-pulse relative group-hover:shadow-xl group-hover:shadow-primary/40"
            style={{ animationDelay }}
          >
            <Icon className="h-10 w-10 text-primary group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse-glow" />
          </div>

          <h3 className="text-lg font-black mb-5 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
            {description}
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-all duration-300 group-hover/item:scale-110">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1 group-hover/item:text-primary transition-colors">
                    {feature.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105"
          >
            <Link href={linkHref} className="flex items-center justify-center gap-2">
              {linkText}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </CometCard>
  );
}
