"use client";

import { cn } from "@/lib/utils";
import { MarkdownRenderer } from "./markdown-renderer";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] prose prose-sm dark:prose-invert",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        <MarkdownRenderer content={message.content} />
      </div>
    </div>
  );
}