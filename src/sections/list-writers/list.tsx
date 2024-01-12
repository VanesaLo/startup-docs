import { writers } from "@/common/data";
import ProfileCard from "@/components/card-list";

import React from "react";

export const DashboardPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Contenedor principal */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProfileCard
                profile={writers}
                textButton="ver perfil"
                path="/dashboard/writer-profile"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
