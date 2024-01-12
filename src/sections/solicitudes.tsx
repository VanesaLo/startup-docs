import { solicitudes } from "@/common/solicitudes";

import ProfileCard from "@/components/card-list";

export const SolicitudesPage = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProfileCard
            profile={solicitudes}
            textButton="ver chat"
            path="/dashboard/chat"
          />
        </div>
      </div>
    </div>
  );
};
