"use client";

import React, { useState, useEffect } from "react";
import {
  PostCard,
  CreatePost,
  PostSkeletonList,
  ProfileSidebar,
} from "@/posts/components";
import { useAuth } from "@/auth";

// Mock data based on Prisma schema - this would come from your API
const mockPosts = [
  {
    id: 1,
    createdAt: "2024-12-05T10:00:00Z",
    updatedAt: "2024-12-05T10:00:00Z",
    title: "Welcome to Systems Connect!",
    content:
      "Excited to share our new internal social platform! This is where we'll connect, collaborate, and share our experiences at Systems Limited. Looking forward to seeing what everyone shares! 🚀",
    published: true,
    authorId: 1,
    author: {
      id: 1,
      firstName: "Ahmed",
      lastName: "Khan",
      bio: "Software Engineer at Systems Limited",
      picture: null,
    },
    _count: {
      Like: 12,
      Comment: 3,
    },
    isLiked: false,
  },
  {
    id: 2,
    createdAt: "2024-12-05T09:30:00Z",
    updatedAt: "2024-12-05T09:30:00Z",
    title: "Team Lunch at the New Cafe",
    content:
      "Had an amazing team lunch at the new cafe on the 5th floor! The food was delicious and it was great to catch up with everyone outside of work. Highly recommend the chicken karahi! 🍽️",
    published: true,
    authorId: 2,
    author: {
      id: 2,
      firstName: "Sarah",
      lastName: "Ahmed",
      bio: "Product Manager",
      picture: null,
    },
    _count: {
      Like: 8,
      Comment: 5,
    },
    isLiked: true,
  },
  {
    id: 3,
    createdAt: "2024-12-05T08:45:00Z",
    updatedAt: "2024-12-05T08:45:00Z",
    title: "Celebrating Our Q4 Success",
    content:
      "Proud to announce that our team exceeded all Q4 targets! This wouldn't have been possible without everyone's hard work and dedication. Here's to an even better 2025! 🎉\n\nSpecial thanks to the dev team for those late nights and the QA team for ensuring everything was perfect.",
    published: true,
    authorId: 3,
    author: {
      id: 3,
      firstName: "Muhammad",
      lastName: "Ali",
      bio: "Engineering Manager",
      picture: null,
    },
    _count: {
      Like: 25,
      Comment: 8,
    },
    isLiked: false,
  },
];

function Feed() {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<typeof mockPosts>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API call to fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPosts(mockPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (data: { title: string; content: string }) => {
    // Simulate API call to create post
    console.log("Creating post:", data);

    // In a real app, you would call your API here
    // const newPost = await createPost(data);

    // For now, we'll just add it to the local state
    const newPost = {
      id: posts.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title: data.title,
      content: data.content,
      published: true,
      authorId: 999, // This would come from the current user
      author: {
        id: 999,
        firstName: "You", // This would come from the current user
        lastName: "",
        bio: "Systems Limited Employee",
        picture: null,
      },
      _count: {
        Like: 0,
        Comment: 0,
      },
      isLiked: false,
    };

    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: number) => {
    // Simulate API call to like/unlike post
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
    // This would navigate to a comment view or open a comment modal
    console.log("Opening comments for post:", postId);
  };

  const handleShare = (postId: number) => {
    // This would implement sharing functionality
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
            Please log in to view and create posts.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar - Profile */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20">
            <ProfileSidebar />
          </div>
        </div>

        {/* Main Content - Posts Feed */}
        <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Feed</h1>
            <p className="text-muted-foreground">
              Stay connected with your colleagues and share what&apos;s
              happening.
            </p>
          </div>

          {/* Create Post Component */}
          <CreatePost onSubmit={handleCreatePost} />

          {/* Posts Feed */}
          <div className="space-y-6">
            {loading ? (
              <PostSkeletonList count={3} />
            ) : posts.length > 0 ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onComment={handleComment}
                  onShare={handleShare}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No posts yet. Be the first to share something!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Could be used for trending, suggestions, etc. */}
        <div className="hidden xl:block w-80 flex-shrink-0">
          {/* This space could be used for additional content like trending posts, suggestions, etc. */}
        </div>
      </div>
    </div>
  );
}

export default Feed;
