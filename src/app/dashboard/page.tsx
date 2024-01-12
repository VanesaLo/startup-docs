import { DashboardPage } from "@/sections/list-writers/list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List writers",
};
export default function Dashboard() {
  return <DashboardPage />;
}
