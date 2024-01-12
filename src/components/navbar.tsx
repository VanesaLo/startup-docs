import Link from "next/link";

export const NavDashboard = () => {
  const itemsNav = [
    {
      path: "/dashboard",
      item: "Inicio",
    },

    {
      path: "/dashboard/solicitudes",
      item: "Solicitudes",
    },
    {
      path: "/dashboard/profile",
      item: "Perfil",
    },
    {
      path: "/",
      item: "Cerrar Sesión",
    },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:px-8 flex flex-row justify-around">
        <div className="flex-1 flex items-center">
          <span className="text-2xl font-bold text-violet-800">
            Escritores STP
          </span>
        </div>
        <div className="sm:ml-6 sm:flex sm:space-x-8">
          {itemsNav.map((item, i) => (
            <Link
              href={item.path}
              className="hover:border-violet-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              key={i}
            >
              {item.item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
