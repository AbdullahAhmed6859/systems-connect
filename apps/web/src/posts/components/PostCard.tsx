"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@repo/shadcn/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/shadcn/components/ui/avatar";
import { Button } from "@repo/shadcn/components/ui/button";
import { Badge } from "@repo/shadcn/components/ui/badge";
import { Separator } from "@repo/shadcn/components/ui/separator";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Types based on Prisma schema
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
  isLiked?: boolean; // Client-side state
}

interface PostCardProps {
  post: Post;
  onLike?: (postId: number) => void;
  onComment?: (postId: number) => void;
  onShare?: (postId: number) => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likeCount, setLikeCount] = useState(post._count.Like);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    onLike?.(post.id);
  };

  const getInitials = (firstName: string, lastName: string | null) => {
    return `${firstName.charAt(0)}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  const getFullName = (firstName: string, lastName: string | null) => {
    return `${firstName}${lastName ? ` ${lastName}` : ""}`;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.picture || undefined} />
              <AvatarFallback>
                {getInitials(post.author.firstName, post.author.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">
                  {getFullName(post.author.firstName, post.author.lastName)}
                </h3>
                {post.published && (
                  <Badge variant="secondary" className="text-xs">
                    Published
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Post Title */}
        <h2 className="text-lg font-semibold mb-3">{post.title}</h2>

        {/* Post Content */}
        {post.content && (
          <div className="mb-4">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        )}

        <Separator className="my-4" />

        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>
            {likeCount} {likeCount === 1 ? "like" : "likes"}
          </span>
          <span>
            {post._count.Comment}{" "}
            {post._count.Comment === 1 ? "comment" : "comments"}
          </span>
        </div>

        <Separator className="mb-3" />

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center gap-2 ${
              isLiked ? "text-red-500 hover:text-red-600" : ""
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            Like
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onComment?.(post.id)}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Comment
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare?.(post.id)}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PostCard;
