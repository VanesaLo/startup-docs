import { LoginPage } from "@/sections/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function Home() {
  return <LoginPage />;
}
