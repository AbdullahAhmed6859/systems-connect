import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/components/ui/card";
import { Button } from "@repo/shadcn/components/ui/button";
import { Users, MessageSquare, Heart, Sparkles } from "lucide-react";

function CommunitySection() {
  return (
    <div className="w-full py-16 lg:py-24">
      <div className="container mx-auto xl:px-16 lg:px-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join our thriving community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with talented professionals from across Systems Limited and
            be part of something bigger
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Community Stats */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Active Community Members
                </CardTitle>
                <CardDescription>
                  Connect with colleagues who are making a difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium border-2 border-background">
                      AH
                    </div>
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-medium border-2 border-background">
                      MK
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium border-2 border-background">
                      JS
                    </div>
                    <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium border-2 border-background">
                      +2.5K
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">2,500+ active members</p>
                    <p className="text-sm text-muted-foreground">
                      From all departments
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      Messages daily
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Connections made
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">
                    Why join our community?
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">
                    Share knowledge and learn from experts across different
                    teams
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">
                    Get help on projects and collaborate on innovative solutions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">
                    Stay updated with company news and announcements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm">
                    Build meaningful professional relationships
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Community Highlights */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Recent Community Activity
                </CardTitle>
                <CardDescription>
                  See what your colleagues are talking about
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
                    AH
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Ahmed Hassan</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Software Engineering
                    </p>
                    <p className="text-sm">
                      &quot;Just launched our new mobile app feature! 🚀&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-medium">
                    MK
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Maria Khan</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Product Design
                    </p>
                    <p className="text-sm">
                      &quot;Looking for feedback on the new UI designs&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium">
                    JS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">John Smith</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Project Management
                    </p>
                    <p className="text-sm">
                      &quot;Team lunch tomorrow at 12:30 PM! 🍕&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ready to connect?</CardTitle>
                <CardDescription>
                  Join conversations happening right now
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">
                    <Users className="w-4 h-4 mr-2" />
                    Join Community
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Browse Channels
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunitySection;
