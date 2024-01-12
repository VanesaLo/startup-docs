import { DashboardPage } from "@/sections/list-writers/list";
import { SolicitudesPage } from "@/sections/solicitudes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitudes",
};
export default function Solicitudes() {
  return <SolicitudesPage />;
}
