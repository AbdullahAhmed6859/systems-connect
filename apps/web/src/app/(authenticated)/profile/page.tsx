import { ProfileHeader, ProfileTabs } from "@/profile/components";
import { Post } from "@/posts/components/PostCard";
import { UserProfile } from "@/profile/components/ProfileHeader";

// Mock user profile data based on Prisma schema
const mockUserProfile: UserProfile = {
  id: 1,
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
const mockUserPosts: Post[] = [
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
      id: 1,
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
      id: 1,
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
  const profile = mockUserProfile;
  const posts = mockUserPosts;

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <ProfileHeader profile={profile} isOwnProfile={true} />

      {/* Profile Tabs */}
      <ProfileTabs posts={posts} profile={profile} isOwnProfile={true} />
    </div>
  );
}

export default ProfilePage;
