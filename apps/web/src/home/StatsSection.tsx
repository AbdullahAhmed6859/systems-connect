import { Card, CardContent } from "@repo/shadcn/components/ui/card";
import {
  Building,
  Users,
  Globe,
  Award,
  TrendingUp,
  Target,
} from "lucide-react";

function StatsSection() {
  return (
    <div className="w-full py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto xl:px-16 lg:px-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Systems Limited teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From software development to client services, teams across Systems
            Limited use Connect to collaborate, share knowledge, and drive
            innovation together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          <Card>
            <CardContent className="text-center p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">
                Years of Excellence
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Employees</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">
                Countries Served
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">
                Active Projects
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Building className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-muted-foreground">
                Global Offices
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Industry Leader</h3>
              </div>
              <p className="text-muted-foreground">
                Recognized as a leading technology solutions provider with
                multiple industry awards and certifications across various
                domains.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Global Reach</h3>
              </div>
              <p className="text-muted-foreground">
                Serving clients across 50+ countries with dedicated teams and
                offices strategically located around the world.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Continuous Growth</h3>
              </div>
              <p className="text-muted-foreground">
                Consistent year-over-year growth in revenue, team size, and
                client satisfaction ratings across all service verticals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
