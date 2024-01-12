import { CheckoutPage } from "@/sections/checkout";
import { DashboardPage } from "@/sections/list-writers/list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};
export default function Checkout() {
  return <CheckoutPage />;
}
