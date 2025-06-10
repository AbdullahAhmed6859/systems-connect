"use client";

import React from "react";
import { PostCard } from "@/posts/components";
import { Post } from "@/posts/components/PostCard";

// This would come from your API based on the post ID
const mockPost: Post = {
  id: 1,
  createdAt: "2024-12-05T10:00:00Z",
  updatedAt: "2024-12-05T10:00:00Z",
  title: "Welcome to Systems Connect!",
  content:
    "Excited to share our new internal social platform! This is where we&apos;ll connect, collaborate, and share our experiences at Systems Limited. Looking forward to seeing what everyone shares! 🚀\n\nThis platform will help us:\n• Share updates and announcements\n• Collaborate on projects\n• Connect with colleagues across departments\n• Build a stronger company culture\n\nLet&apos;s make this a vibrant community!",
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
};

function PostPage() {
  const post = mockPost;

  return (
    <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Post Details</h1>
        <p className="text-muted-foreground">
          Viewing individual post by {post.author.firstName}{" "}
          {post.author.lastName}
        </p>
      </div>

      {/* Post Content */}
      <PostCard post={post} />

      {/* Comments Section - Future Implementation */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-4">
          Comments ({post._count.Comment})
        </h3>
        <div className="text-center py-8 text-muted-foreground">
          <p>Comments feature coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
