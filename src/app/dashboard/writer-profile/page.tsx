import { ProfileWriter } from "@/sections/profile-writer/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writer Profile",
};
export default function WriterProfile() {
  return <ProfileWriter />;
}
