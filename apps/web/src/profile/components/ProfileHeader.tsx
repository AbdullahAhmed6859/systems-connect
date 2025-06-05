"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@repo/shadcn/components/ui/card";
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
  Edit3,
  UserPlus,
  UserCheck,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Types based on Prisma schema
interface UserProfile {
  id: number;
  firstName: string;
  lastName: string | null;
  bio: string | null;
  picture: string | null;
  createdAt: string;
  _count: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
  };
  isFollowing?: boolean; // For when viewing other users
}

interface ProfileHeaderProps {
  profile: UserProfile;
  isOwnProfile: boolean;
  onEdit?: () => void;
  onFollow?: () => void;
  onMessage?: () => void;
}

export function ProfileHeader({
  profile,
  isOwnProfile,
  onEdit,
  onFollow,
  onMessage,
}: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(profile.isFollowing || false);
  const [followersCount, setFollowersCount] = useState(
    profile._count.followers
  );

  const getInitials = (firstName: string, lastName: string | null) => {
    return `${firstName.charAt(0)}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  const getFullName = (firstName: string, lastName: string | null) => {
    return `${firstName}${lastName ? ` ${lastName}` : ""}`;
  };

  const getJoinDate = (createdAt: string) => {
    return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  };

  const handleFollow = () => {
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    setFollowersCount(
      newFollowingState ? followersCount + 1 : followersCount - 1
    );
    onFollow?.();
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Avatar and Basic Info */}
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src={profile.picture || undefined} />
              <AvatarFallback className="text-3xl">
                {getInitials(profile.firstName, profile.lastName)}
              </AvatarFallback>
            </Avatar>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">
                {getFullName(profile.firstName, profile.lastName)}
              </h1>
              <p className="text-lg text-muted-foreground mb-3">
                Software Engineer at Systems Limited
              </p>
              <Badge variant="secondary" className="mb-4">
                Employee
              </Badge>
            </div>
          </div>

          {/* Right Section - Bio and Stats */}
          <div className="flex-1">
            {/* Bio */}
            {profile.bio && (
              <div className="mb-6">
                <p className="text-base leading-relaxed">{profile.bio}</p>
              </div>
            )}

            {/* Location and Join Date */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Joined {getJoinDate(profile.createdAt)}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{profile._count.posts}</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{followersCount}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {profile._count.following}
                </div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{profile._count.likes}</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {isOwnProfile ? (
                <Button onClick={onEdit} className="flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleFollow}
                    variant={isFollowing ? "outline" : "default"}
                    className="flex items-center gap-2"
                  >
                    {isFollowing ? (
                      <>
                        <UserCheck className="h-4 w-4" />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4" />
                        Follow
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onMessage}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileHeader;
