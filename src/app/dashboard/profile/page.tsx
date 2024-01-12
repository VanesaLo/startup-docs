import { UserProfile } from "@/sections/profile-user/my-profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My profile",
};
export default function ProfileUser() {
  return <UserProfile />;
}
