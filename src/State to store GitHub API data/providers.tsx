"use client";
import { ReactNode } from "react";
import { GithubProvider } from "./app/context/githubContext";

export function Providers({ children }: { children: ReactNode }) {
  return <GithubProvider>{children}</GithubProvider>;
}
