import { RegisterPage } from "@/sections/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};
export default function RegisterView() {
  return <RegisterPage />;
}
