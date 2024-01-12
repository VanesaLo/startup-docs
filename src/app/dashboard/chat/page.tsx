import { Chat } from "@/sections/chat";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};
export default function ChatPage() {
  return <Chat />;
}
