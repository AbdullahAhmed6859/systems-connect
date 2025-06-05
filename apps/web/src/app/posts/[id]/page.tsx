"use client";

import React, { useState, useEffect } from "react";
import { PostCard, ProfileSidebar } from "@/posts/components";
import { useAuth } from "@/auth";
import { useParams } from "next/navigation";

// This would come from your API based on the post ID
const mockPost = {
  id: 1,
  createdAt: "2024-12-05T10:00:00Z",
  updatedAt: "2024-12-05T10:00:00Z",
  title: "Welcome to Systems Connect!",
  content:
    "Excited to share our new internal social platform! This is where we&apos;ll connect, collaborate, and share our experiences at Systems Limited. Looking forward to seeing what everyone shares! 🚀\n\nThis platform will help us:\n• Share updates and announcements\n• Collaborate on projects\n• Connect with colleagues across departments\n• Build a stronger company culture\n\nLet&apos;s make this a vibrant community!",
  published: true,
  authorId: 1,
  author: {
    userId: 1,
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
};

function PostPage() {
  const params = useParams();
  const { isAuthenticated } = useAuth();
  const [post, setPost] = useState<typeof mockPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate API call to fetch post by ID
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would fetch the post by ID
      // const postData = await getPostById(params.id);
      setPost(mockPost);
      setLoading(false);
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  const handleLike = (postId: number) => {
    if (!post) return;

    console.log("Toggling like for post:", postId);
    const newIsLiked = !post.isLiked;
    setPost({
      ...post,
      isLiked: newIsLiked,
      _count: {
        ...post._count,
        Like: newIsLiked ? post._count.Like + 1 : post._count.Like - 1,
      },
    });
  };

  const handleComment = (postId: number) => {
    console.log("Opening comments for post:", postId);
    // This would open a comment modal or navigate to comments section
  };

  const handleShare = (postId: number) => {
    console.log("Sharing post:", postId);
    // Copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
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
            Please log in to view posts.
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
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading post...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto xl:px-16 lg:px-8 px-4 py-8">
        <div className="flex gap-8">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-20">
              <ProfileSidebar />
            </div>
          </div>
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
              <p className="text-muted-foreground">
                The post you&apos;re looking for doesn&apos;t exist or has been
                removed.
              </p>
            </div>
          </div>
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

        {/* Main Content - Individual Post */}
        <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Post Details</h1>
            <p className="text-muted-foreground">
              Viewing individual post by {post.author.firstName}{" "}
              {post.author.lastName}
            </p>
          </div>

          {/* Post Content */}
          <PostCard
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />

          {/* Comments Section - Future Implementation */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">
              Comments ({post._count.Comment})
            </h3>
            <div className="text-center py-8 text-muted-foreground">
              <p>Comments feature coming soon...</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Related Posts or Actions */}
        <div className="hidden xl:block w-80 flex-shrink-0">
          {/* This space could be used for related posts, author info, etc. */}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
