"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { apiClient } from "@/utils/apiClient";
import { tokenDataSchema } from "@repo/zod-schemas/user";
import { z } from "zod";
import { BACKEND_URL } from "@/utils/config";

// Define user type based on your JWT payload
export type User = z.infer<typeof tokenDataSchema>;

type AuthenticatedState = {
  user: User; // User is required and non-null
  isLoading: false;
  isAuthenticated: true;
  error: null | string;
};

type UnauthenticatedState = {
  user: null;
  isLoading: false;
  isAuthenticated: false;
  error: null | string;
};

type LoadingState = {
  user: null;
  isLoading: true;
  isAuthenticated: false;
  error: null;
};

type AuthContextType = (
  | AuthenticatedState
  | UnauthenticatedState
  | LoadingState
) & {
  login: (redirectTo?: string) => void;
  logout: () => Promise<void>;
  refetchUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<
    "loading" | "authenticated" | "unauthenticated" | "error"
  >("loading");
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setStatus("loading");
      setError(null);

      const response = await apiClient.get("/auth/cookie-data");
      console.log(response.data.data.user);
      const user = tokenDataSchema.parse(response.data.data.user);
      console.log(user);
      setUser(user);
      setStatus("authenticated");
    } catch (err: unknown) {
      const error = err as { response?: { status?: number } };
      if (error.response?.status === 401) {
        setStatus("unauthenticated");
      } else {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user data");
        setStatus("error");
      }
      setUser(null);
    }
  };

  const login = (redirectTo?: string) => {
    const currentPath = window.location.pathname + window.location.search;
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const encodedRedirect = encodeURIComponent(
      redirectTo ? `${baseUrl}${redirectTo}` : `${baseUrl}${currentPath}`
    );
    window.location.href = `${BACKEND_URL}/auth/google?redirect_to=${encodedRedirect}`;
  };

  const logout = async () => {
    try {
      setStatus("loading");
      await apiClient.post("/auth/logout");
      setUser(null);
      setError(null);
      setStatus("unauthenticated");
      window.location.href = "/";
    } catch (err) {
      console.error("Logout error:", err);
      setError("Logout failed");
      setStatus("authenticated");
    }
  };

  const refetchUser = async () => {
    await fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  let value: AuthContextType;

  if (isLoading) {
    value = {
      user: null,
      isLoading: true,
      isAuthenticated: false,
      error: null,
      login,
      logout,
      refetchUser,
    };
  } else if (isAuthenticated && user) {
    value = {
      user,
      isLoading: false,
      isAuthenticated: true,
      error,
      login,
      logout,
      refetchUser,
    };
  } else {
    value = {
      user: null,
      isLoading: false,
      isAuthenticated: false,
      error,
      login,
      logout,
      refetchUser,
    };
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
