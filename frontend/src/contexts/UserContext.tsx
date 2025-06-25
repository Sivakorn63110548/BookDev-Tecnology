import { createContext, useContext } from "react";

export interface UserPayload {
  id: string;
  name: string;
  username: string;
  email: string;
  profile_img: string;
  exp?: number;
}

export interface UserContextType {
  user: UserPayload | null;
}

export const UserContext = createContext<UserContextType>({ user: null });

export function useUser() {
  return useContext(UserContext);
}
