import React from "react";
import { Card, CardContent, CardHeader } from "@repo/shadcn/components/ui/card";
import { Skeleton } from "@repo/shadcn/components/ui/skeleton";
import { Separator } from "@repo/shadcn/components/ui/separator";

export function PostSkeleton() {
  return (
    <Card className="w-full max-w-2xl mx-auto mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Avatar Skeleton */}
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col space-y-2">
              {/* Name and Badge Skeleton */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              {/* Time Skeleton */}
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
          {/* More Options Skeleton */}
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 mb-3" />

        {/* Content Skeleton */}
        <div className="mb-4 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <Separator className="my-4" />

        {/* Engagement Stats Skeleton */}
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>

        <Separator className="mb-3" />

        {/* Action Buttons Skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

interface PostSkeletonListProps {
  count?: number;
}

export function PostSkeletonList({ count = 3 }: PostSkeletonListProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <PostSkeleton key={index} />
      ))}
    </>
  );
}

export default PostSkeleton;
