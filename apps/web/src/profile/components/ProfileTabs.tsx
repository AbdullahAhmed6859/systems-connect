"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@repo/shadcn/components/ui/card";
import { Button } from "@repo/shadcn/components/ui/button";
import { Separator } from "@repo/shadcn/components/ui/separator";
import { PostCard } from "@/posts/components";
import { FileText, User, Users, UserCheck } from "lucide-react";

interface Post {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
  author: {
    id: number;
    firstName: string;
    lastName: string | null;
    bio: string | null;
    picture: string | null;
  };
  _count: {
    Like: number;
    Comment: number;
  };
  isLiked?: boolean;
}

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string | null;
  bio: string | null;
  picture: string | null;
  createdAt: string;
}

interface ProfileTabsProps {
  posts: Post[];
  profile: UserProfile;
  isOwnProfile: boolean;
  onLike?: (postId: number) => void;
  onComment?: (postId: number) => void;
  onShare?: (postId: number) => void;
}

type TabType = "posts" | "about" | "followers" | "following";

export function ProfileTabs({
  posts,
  profile,
  isOwnProfile,
  onLike,
  onComment,
  onShare,
}: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("posts");

  const tabs = [
    { id: "posts", label: "Posts", icon: FileText, count: posts.length },
    { id: "about", label: "About", icon: User },
    { id: "followers", label: "Followers", icon: Users, count: 45 },
    { id: "following", label: "Following", icon: UserCheck, count: 38 },
  ] as const;

  const renderTabContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div className="space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={onLike}
                  onComment={onComment}
                  onShare={onShare}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground">
                  {isOwnProfile
                    ? "Share your first post to get started!"
                    : `${profile.firstName} hasn't shared any posts yet.`}
                </p>
              </div>
            )}
          </div>
        );

      case "about":
        return (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  {profile.bio ? (
                    <p className="text-base leading-relaxed">{profile.bio}</p>
                  ) : (
                    <p className="text-muted-foreground italic">
                      {isOwnProfile
                        ? "Add a bio to tell others about yourself."
                        : `${profile.firstName} hasn't added a bio yet.`}
                    </p>
                  )}
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Work</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Position</span>
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company</span>
                      <span>Systems Limited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department</span>
                      <span>Engineering</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Joined</span>
                      <span>
                        {new Date(profile.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case "followers":
        return (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Followers</h3>
                <p className="text-muted-foreground">
                  Followers list feature coming soon...
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case "following":
        return (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <UserCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Following</h3>
                <p className="text-muted-foreground">
                  Following list feature coming soon...
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <Button
                  key={tab.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                  {"count" in tab && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? "bg-primary-foreground text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}

export default ProfileTabs;
