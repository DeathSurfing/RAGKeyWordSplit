"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatHistoryProps {
  messages: Array<{
    id: string;
    content: string;
  }>;
}

export function ChatHistory({ messages }: ChatHistoryProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="space-y-2 p-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "rounded-lg p-3 text-sm transition-colors hover:bg-muted",
              "cursor-pointer truncate"
            )}
          >
            {message.content}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}