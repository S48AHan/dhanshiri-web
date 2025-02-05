"use client";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import Nav from "@/components/layout/Nav";

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <Nav />
      {children}
    </HeroUIProvider>
  );
}
