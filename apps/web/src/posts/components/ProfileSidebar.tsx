"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@repo/shadcn/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/shadcn/components/ui/avatar";
import { Button } from "@repo/shadcn/components/ui/button";
import { Badge } from "@repo/shadcn/components/ui/badge";
import { Separator } from "@repo/shadcn/components/ui/separator";
import {
  MapPin,
  Calendar,
  Users,
  MessageCircle,
  Heart,
  Edit3,
} from "lucide-react";
import { useAuth } from "@/auth";
import { formatDistanceToNow } from "date-fns";

interface ProfileStats {
  postsCount: number;
  followersCount: number;
  followingCount: number;
  likesReceived: number;
}

interface ProfileSidebarProps {
  stats?: ProfileStats;
}

export function ProfileSidebar({ stats }: ProfileSidebarProps) {
  const { user, isAuthenticated } = useAuth();

  const defaultStats: ProfileStats = {
    postsCount: 12,
    followersCount: 45,
    followingCount: 38,
    likesReceived: 156,
  };

  const userStats = stats || defaultStats;

  const getInitials = (firstName: string) => {
    return firstName.charAt(0).toUpperCase();
  };

  const getJoinDate = () => {
    // This would come from your user data - for now using a mock date
    const joinDate = new Date("2023-03-15");
    return formatDistanceToNow(joinDate, { addSuffix: true });
  };

  if (!isAuthenticated || !user) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground text-sm">
            Please log in to view your profile.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Profile Card */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Profile Picture */}
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.picture || undefined} />
              <AvatarFallback className="text-lg">
                {getInitials(user.firstName)}
              </AvatarFallback>
            </Avatar>

            {/* Name and Title */}
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{user.firstName}</h3>
              <p className="text-sm text-muted-foreground">
                Software Engineer at Systems Limited
              </p>
              <Badge variant="secondary" className="text-xs">
                Employee
              </Badge>
            </div>

            {/* Edit Profile Button */}
            <Button variant="outline" size="sm" className="w-full">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <Separator className="mb-4" />

          {/* Profile Stats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Posts</span>
              <span className="font-medium">{userStats.postsCount}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Followers</span>
              <span className="font-medium">{userStats.followersCount}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Following</span>
              <span className="font-medium">{userStats.followingCount}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Likes Received</span>
              <span className="font-medium">{userStats.likesReceived}</span>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Additional Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Joined {getJoinDate()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions Card */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <h4 className="font-semibold text-sm">Quick Actions</h4>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Users className="h-4 w-4 mr-2" />
            View Connections
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <MessageCircle className="h-4 w-4 mr-2" />
            My Comments
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Heart className="h-4 w-4 mr-2" />
            Liked Posts
          </Button>
        </CardContent>
      </Card>

      {/* Company Info Card */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <h4 className="font-semibold text-sm">Systems Limited</h4>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Employees</span>
              <span className="font-medium">2,500+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Active on Platform</span>
              <span className="font-medium">1,200+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Posts Today</span>
              <span className="font-medium">45</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileSidebar;
