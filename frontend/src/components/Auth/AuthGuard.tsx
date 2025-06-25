"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { UserContext, UserContextType } from "@/contexts/UserContext";
import { Loading } from "@/components/loading";

interface Props {
  children: ReactNode;
}

interface TokenPayload {
  id: string;
  name: string;
  username: string;
  email: string;
  profile_img: string;
  exp?: number;
}

export function AuthGuard({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserContextType["user"]>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (pathname === "/auth/sign-in") {
      setLoading(false);
      return;
    }

    if (!token) {
      router.replace("/auth/sign-in");
      return;
    }

    try {
      const decoded = jwtDecode<TokenPayload>(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.replace("/auth/sign-in");
        return;
      }

      setUser(decoded);
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
      router.replace("/auth/sign-in");
    } finally {
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading) return <Loading />;

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}