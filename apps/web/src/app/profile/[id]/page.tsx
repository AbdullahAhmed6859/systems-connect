"use client";

import React, { useState, useEffect } from "react";
import { ProfileHeader, ProfileTabs } from "@/profile/components";
import { ProfileSidebar } from "@/posts/components";
import { useAuth } from "@/auth";
import { useParams } from "next/navigation";

// Mock user profiles database
const mockUserProfiles = {
  "1": {
    userId: 1,
    firstName: "Ahmed",
    lastName: "Khan",
    bio: "Senior Software Engineer at Systems Limited. Passionate about React, Node.js, and building amazing user experiences. Always excited to learn new technologies and mentor junior developers.",
    picture: null,
    createdAt: "2022-01-15T10:00:00Z",
    _count: {
      posts: 25,
      followers: 120,
      following: 85,
      likes: 340,
    },
    isFollowing: false,
  },
  "2": {
    userId: 2,
    firstName: "Sarah",
    lastName: "Ahmed",
    bio: "Product Manager with a passion for creating user-centered solutions. Love collaborating with cross-functional teams to deliver exceptional products.",
    picture: null,
    createdAt: "2022-05-20T14:30:00Z",
    _count: {
      posts: 18,
      followers: 95,
      following: 65,
      likes: 210,
    },
    isFollowing: true,
  },
  "3": {
    userId: 3,
    firstName: "Muhammad",
    lastName: "Ali",
    bio: "Engineering Manager at Systems Limited. Leading a team of talented developers and focusing on scalable architecture and team growth.",
    picture: null,
    createdAt: "2021-08-10T09:15:00Z",
    _count: {
      posts: 45,
      followers: 200,
      following: 110,
      likes: 520,
    },
    isFollowing: false,
  },
};

// Mock posts by different users
const mockUserPostsData = {
  "1": [
    {
      id: 101,
      createdAt: "2024-12-05T10:00:00Z",
      updatedAt: "2024-12-05T10:00:00Z",
      title: "Building scalable React applications",
      content:
        "Just finished implementing a new architecture pattern for our React apps. Using custom hooks and context providers has really improved our code reusability and testing capabilities. Excited to share more details in our next tech talk! 🚀",
      published: true,
      authorId: 1,
      author: {
        userId: 1,
        firstName: "Ahmed",
        lastName: "Khan",
        bio: "Senior Software Engineer at Systems Limited",
        picture: null,
      },
      _count: {
        Like: 15,
        Comment: 8,
      },
      isLiked: false,
    },
    {
      id: 102,
      createdAt: "2024-12-03T16:45:00Z",
      updatedAt: "2024-12-03T16:45:00Z",
      title: "Mentoring junior developers",
      content:
        "Had a great mentoring session today with some of our junior developers. It's amazing to see their progress and enthusiasm for learning. Remember, the best way to learn is by doing - don't be afraid to make mistakes!",
      published: true,
      authorId: 1,
      author: {
        userId: 1,
        firstName: "Ahmed",
        lastName: "Khan",
        bio: "Senior Software Engineer at Systems Limited",
        picture: null,
      },
      _count: {
        Like: 22,
        Comment: 12,
      },
      isLiked: true,
    },
  ],
  "2": [
    {
      id: 201,
      createdAt: "2024-12-04T11:20:00Z",
      updatedAt: "2024-12-04T11:20:00Z",
      title: "User research insights",
      content:
        "Just completed our quarterly user research sessions. The insights we gathered will really help shape our product roadmap for next year. User feedback is invaluable for building products that truly matter! 📊",
      published: true,
      authorId: 2,
      author: {
        userId: 2,
        firstName: "Sarah",
        lastName: "Ahmed",
        bio: "Product Manager",
        picture: null,
      },
      _count: {
        Like: 18,
        Comment: 6,
      },
      isLiked: false,
    },
  ],
  "3": [
    {
      id: 301,
      createdAt: "2024-12-05T08:30:00Z",
      updatedAt: "2024-12-05T08:30:00Z",
      title: "Team retrospective highlights",
      content:
        "Had an excellent retrospective with the engineering team today. It's incredible to see how much we've grown as a team and the innovative solutions we've implemented. Proud of everyone's dedication and collaborative spirit! 🎉",
      published: true,
      authorId: 3,
      author: {
        userId: 3,
        firstName: "Muhammad",
        lastName: "Ali",
        bio: "Engineering Manager",
        picture: null,
      },
      _count: {
        Like: 28,
        Comment: 14,
      },
      isLiked: false,
    },
  ],
};

function UserProfilePage() {
  const params = useParams();
  const { user, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<
    (typeof mockUserProfiles)[keyof typeof mockUserProfiles] | null
  >(null);
  const [posts, setPosts] = useState<
    (typeof mockUserPostsData)[keyof typeof mockUserPostsData]
  >([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const userId = params.id as string;

  // Simulate API call to fetch user profile and posts
  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated || !userId) return;

      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user exists
      const userProfile =
        mockUserProfiles[userId as keyof typeof mockUserProfiles];
      const userPosts =
        mockUserPostsData[userId as keyof typeof mockUserPostsData] || [];

      if (!userProfile) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setProfile(userProfile);
      setPosts(userPosts);
      setLoading(false);
    };

    fetchUserData();
  }, [isAuthenticated, userId]);

  const handleFollow = () => {
    if (!profile) return;
    console.log("Toggling follow for user:", userId);
    // In a real app, you would call your API here
    setProfile({
      ...profile,
      isFollowing: !profile.isFollowing,
      _count: {
        ...profile._count,
        followers: profile.isFollowing
          ? profile._count.followers - 1
          : profile._count.followers + 1,
      },
    });
  };

  const handleMessage = () => {
    console.log("Opening message for user:", userId);
    // This would open a messaging interface
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
            Please log in to view profiles.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
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

  if (notFound || !profile) {
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
              <h1 className="text-2xl font-bold mb-4">User Not Found</h1>
              <p className="text-muted-foreground">
                The user you&apos;re looking for doesn&apos;t exist or has been
                removed.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Check if viewing own profile
  const isOwnProfile = user?.id === profile.userId;

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
              isOwnProfile={isOwnProfile}
              onFollow={handleFollow}
              onMessage={handleMessage}
            />

            {/* Profile Tabs */}
            <ProfileTabs
              posts={posts}
              profile={profile}
              isOwnProfile={isOwnProfile}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          </div>
        </div>

        {/* Right Sidebar - Could be used for mutual connections, etc. */}
        <div className="hidden xl:block w-80 flex-shrink-0">
          {/* This space could be used for mutual connections, suggested people, etc. */}
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
