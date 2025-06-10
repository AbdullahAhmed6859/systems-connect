"use client";
import {
  PostCard,
  CreatePost,
  // PostSkeletonList
} from "@/posts/components";

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
  const posts = mockPosts;

  return (
    <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Feed</h1>
        <p className="text-muted-foreground">
          Stay connected with your colleagues and share what&apos;s happening.
        </p>
      </div>

      {/* Create Post Component */}
      <CreatePost />

      {/* Posts Feed */}
      <div className="space-y-6">
        {
          // loading ? (
          //   <PostSkeletonList count={3} />
          // ) :
          posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No posts yet. Be the first to share something!
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Feed;
