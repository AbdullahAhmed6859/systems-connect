"use client";

import React, { useState, useEffect } from "react";
import { ProfileHeader, ProfileTabs } from "@/profile/components";
import { ProfileSidebar } from "@/posts/components";
import { useAuth } from "@/auth";

// Mock user profile data based on Prisma schema
const mockUserProfile = {
  userId: 1,
  firstName: "John",
  lastName: "Doe" as string | null,
  bio: "Passionate software engineer with 5+ years of experience building scalable web applications. Love working with React, Node.js, and exploring new technologies. Always excited to collaborate on innovative projects!",
  picture: null,
  createdAt: "2023-03-15T10:00:00Z",
  _count: {
    posts: 12,
    followers: 45,
    following: 38,
    likes: 156,
  },
};

// Mock user posts
const mockUserPosts = [
  {
    id: 1,
    createdAt: "2024-12-05T10:00:00Z",
    updatedAt: "2024-12-05T10:00:00Z",
    title: "Excited about our new React project!",
    content:
      "Just started working on a new React project with the latest features. Really excited about the performance improvements and the new concurrent features. Can&apos;t wait to share more updates as we progress! 🚀",
    published: true,
    authorId: 1,
    author: {
      userId: 1,
      firstName: "John",
      lastName: "Doe" as string | null,
      bio: "Software Engineer at Systems Limited",
      picture: null,
    },
    _count: {
      Like: 8,
      Comment: 3,
    },
    isLiked: false,
  },
  {
    id: 2,
    createdAt: "2024-12-04T14:30:00Z",
    updatedAt: "2024-12-04T14:30:00Z",
    title: "Great team meeting today",
    content:
      "Had an amazing brainstorming session with the team today. We came up with some innovative solutions for our upcoming features. Really proud of how collaborative and creative our team is!",
    published: true,
    authorId: 1,
    author: {
      userId: 1,
      firstName: "John",
      lastName: "Doe" as string | null,
      bio: "Software Engineer at Systems Limited",
      picture: null,
    },
    _count: {
      Like: 12,
      Comment: 5,
    },
    isLiked: true,
  },
];

function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<typeof mockUserProfile | null>(null);
  const [posts, setPosts] = useState<typeof mockUserPosts>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API call to fetch user profile and posts
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!isAuthenticated || !user) return;

      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would fetch the user's profile and posts
      // const [profileData, postsData] = await Promise.all([
      //   getUserProfile(user.id),
      //   getUserPosts(user.id)
      // ]);

      // Map current user data to profile format
      const userProfile = {
        ...mockUserProfile,
        userId: user.id || 1,
        firstName: user.firstName,
        lastName: user.lastName || null,
      };

      // Update posts with current user data
      const userPosts = mockUserPosts.map((post) => ({
        ...post,
        author: {
          ...post.author,
          firstName: user.firstName,
          lastName: user.lastName || null,
        },
      }));

      setProfile(userProfile);
      setPosts(userPosts);
      setLoading(false);
    };

    fetchProfileData();
  }, [isAuthenticated, user]);

  const handleEdit = () => {
    console.log("Edit profile clicked");
    // This would open an edit profile modal or navigate to edit page
  };

  const handleLike = (postId: number) => {
    console.log("Toggling like for post:", postId);
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newIsLiked = !post.isLiked;
          return {
            ...post,
            isLiked: newIsLiked,
            _count: {
              ...post._count,
              Like: newIsLiked ? post._count.Like + 1 : post._count.Like - 1,
            },
          };
        }
        return post;
      })
    );
  };

  const handleComment = (postId: number) => {
    console.log("Opening comments for post:", postId);
  };

  const handleShare = (postId: number) => {
    console.log("Sharing post:", postId);
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Systems Connect
          </h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            Connect with your colleagues, share updates, and stay informed about
            what&apos;s happening at Systems Limited.
          </p>
          <p className="text-sm text-muted-foreground">
            Please log in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  if (loading || !profile) {
    return (
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="flex gap-8">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-20">
              <ProfileSidebar />
            </div>
          </div>
          <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading profile...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar - Profile Summary */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20">
            <ProfileSidebar
              stats={{
                postsCount: profile._count.posts,
                followersCount: profile._count.followers,
                followingCount: profile._count.following,
                likesReceived: profile._count.likes,
              }}
            />
          </div>
        </div>

        {/* Main Content - Profile Details and Posts */}
        <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
          <div className="space-y-8">
            {/* Profile Header */}
            <ProfileHeader
              profile={profile}
              isOwnProfile={true}
              onEdit={handleEdit}
            />

            {/* Profile Tabs */}
            <ProfileTabs
              posts={posts}
              profile={profile}
              isOwnProfile={true}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          </div>
        </div>

        {/* Right Sidebar - Could be used for additional content */}
        <div className="hidden xl:block w-80 flex-shrink-0">
          {/* This space could be used for recent activity, suggested connections, etc. */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
