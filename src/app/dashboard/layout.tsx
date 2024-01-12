import { Inter } from "next/font/google";

import { NavDashboard } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-gray-100">
          <NavDashboard />

          <div className="flex flex-1">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
