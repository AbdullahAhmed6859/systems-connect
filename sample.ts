// // apps/web/src/contexts/AuthContext.tsx
// 'use client';

// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { apiClient } from '../utils/apiClient';

// // Define user type based on your JWT payload
// interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   picture?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isLoading: boolean;
//   isAuthenticated: boolean;
//   error: string | null;
//   login: (redirectTo?: string) => void;
//   logout: () => Promise<void>;
//   refetchUser: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchUser = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const response = await apiClient.get('/auth/cookie-data');
//       setUser(response.data.user || response.data); // Adjust based on your API response structure
//     } catch (err: any) {
//       if (err.response?.status === 401) {
//         // User not authenticated
//         setUser(null);
//       } else {
//         console.error('Error fetching user:', err);
//         setError('Failed to fetch user data');
//       }
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = (redirectTo?: string) => {
//     const currentPath = window.location.pathname + window.location.search;
//     const encodedRedirect = encodeURIComponent(redirectTo || `http://localhost:3000${currentPath}`);
//     window.location.href = `http://localhost:3500/auth/google?redirect_to=${encodedRedirect}`;
//   };

//   const logout = async () => {
//     try {
//       setIsLoading(true);
//       await apiClient.post('/auth/logout');
//       setUser(null);
//       setError(null);
//       // Redirect to home page after logout
//       window.location.href = '/';
//     } catch (err) {
//       console.error('Logout error:', err);
//       // Even if logout fails on server, clear client state
//       setUser(null);
//       window.location.href = '/';
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const refetchUser = async () => {
//     await fetchUser();
//   };

//   // Fetch user on mount
//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const value: AuthContextType = {
//     user,
//     isLoading,
//     isAuthenticated: !!user,
//     error,
//     login,
//     logout,
//     refetchUser,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// // Custom hook to use the auth context
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }

// // Login prompt component
// // export function LoginPrompt({ message = "Authentication Required" }: { message?: string }) {
// //   const { login } = useAuth();

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen">
// //       <h1 className="text-2xl font-bold mb-4">{message}</h1>
// //       <button
// //         onClick={() => login()}
// //         className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
// //       >
// //         Login with Google
// //       </button>
// //     </div>
// //   );
// // }

// // // Higher-order component for protected routes (use sparingly in App Router)
// // export function withAuth<P extends object>(Component: React.ComponentType<P>) {
// //   return function AuthenticatedComponent(props: P) {
// //     const { isAuthenticated, isLoading } = useAuth();

// //     if (isLoading) {
// //       return <AuthLoadingSpinner />;
// //     }

// //     if (!isAuthenticated) {
// //       return <LoginPrompt />;
// //     }

// //     return <Component {...props} />;
// //   };
// // }
