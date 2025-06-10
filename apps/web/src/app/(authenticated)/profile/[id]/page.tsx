"use client";
import { ProfileHeader, ProfileTabs } from "@/profile/components";
import { useParams } from "next/navigation";
import { Post } from "@/posts/components/PostCard";
import { UserProfile } from "@/profile/components/ProfileHeader";

// Mock user profiles database
const mockUserProfiles: {
  [key: string]: UserProfile;
} = {
  "1": {
    id: 1,
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
    id: 2,
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
    id: 3,
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
const mockUserPostsData: { [key: string]: Post[] } = {
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
        id: 1,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
  const userId = params.id as string;
  const profile = mockUserProfiles[userId];
  const posts = mockUserPostsData[userId];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <ProfileHeader profile={profile!} isOwnProfile />

      {/* Profile Tabs */}
      <ProfileTabs posts={posts!} profile={profile!} isOwnProfile />
    </div>
  );
}

export default UserProfilePage;
