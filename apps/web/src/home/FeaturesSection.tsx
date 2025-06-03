import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/components/ui/card";
import { Users, MessageCircle, Zap, Shield, Clock, Globe } from "lucide-react";

function FeaturesSection() {
  return (
    <div className="w-full py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto xl:px-16 lg:px-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to connect and collaborate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to bring Systems Limited teams together
            and enhance productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Team Collaboration</CardTitle>
                  <CardDescription>Work together seamlessly</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connect with colleagues across all departments and share
                knowledge effortlessly. Break down silos and foster cross-team
                collaboration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    Real-time Communication
                  </CardTitle>
                  <CardDescription>Stay connected instantly</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get instant notifications and never miss important updates from
                your team. Chat, share files, and collaborate in real-time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Smart Integration</CardTitle>
                  <CardDescription>All tools in one place</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Integrate with your favorite tools and streamline your workflow.
                Access everything you need from a single platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Enterprise Security</CardTitle>
                  <CardDescription>Your data is protected</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bank-level security with end-to-end encryption ensures your
                sensitive company data remains safe and compliant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">24/7 Availability</CardTitle>
                  <CardDescription>Always accessible</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access your workspace anytime, anywhere. Mobile and desktop apps
                keep you connected even when you&apos;re on the go.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Global Reach</CardTitle>
                  <CardDescription>Connect worldwide</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connect with Systems Limited offices and teams across the globe.
                Break geographical barriers and work as one unified
                organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
