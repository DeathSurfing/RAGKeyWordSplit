"use client";

import { Chat } from "@/components/chat";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col">
        <Chat />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}