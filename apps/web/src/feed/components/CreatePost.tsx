"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/shadcn/components/ui/avatar";
import { Button } from "@repo/shadcn/components/ui/button";
import { Input } from "@repo/shadcn/components/ui/input";
import { Textarea } from "@repo/shadcn/components/ui/textarea";
import { Separator } from "@repo/shadcn/components/ui/separator";
import { ImageIcon, Smile, MapPin } from "lucide-react";
import { useAuth } from "@/auth";

interface CreatePostProps {
  onSubmit?: (data: { title: string; content: string }) => void;
}

export function CreatePost({ onSubmit }: CreatePostProps) {
  const { user, isAuthenticated } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.({ title: title.trim(), content: content.trim() });
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInitials = (firstName: string) => {
    return firstName.charAt(0).toUpperCase();
  };

  if (!isAuthenticated || !user) {
    return (
      <Card className="w-full max-w-2xl mx-auto mb-6">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Please log in to create a post.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Create a post</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Avatar and Input */}
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10 mt-1">
              <AvatarImage src={user.picture || undefined} />
              <AvatarFallback>{getInitials(user.firstName)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              {/* Title Input */}
              <Input
                placeholder="What would you like to share?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-none bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                maxLength={200}
              />

              {/* Content Textarea */}
              <Textarea
                placeholder="Tell us more about it..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border-none bg-transparent resize-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 p-0 min-h-[80px]"
                maxLength={2000}
              />
            </div>
          </div>

          {/* Character Counter */}
          <div className="flex justify-end text-xs text-muted-foreground">
            <span>
              Title: {title.length}/200 | Content: {content.length}/2000
            </span>
          </div>

          <Separator />

          {/* Action Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9"
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9"
              >
                <MapPin className="h-4 w-4" />
              </Button>
            </div>

            <Button
              type="submit"
              disabled={!title.trim() || !content.trim() || isSubmitting}
              className="px-6"
            >
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreatePost;
