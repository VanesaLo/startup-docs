import Image from "next/image";
import Link from "next/link";

export const ProfileWriter = () => {
  return (
    <div className="flex w-full justify-center py-10">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-3/5 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Investigador en ingeniería de la computación
          </h2>
          <p className="mt-2 text-sm text-gray-600">Duración: 1 hora</p>
          <p className="mt-4 text-gray-600">
            Este servicio incluye una revisión detallada de proyectos de
            ingeniería de la computación, asesoramiento y recomendaciones para
            mejorar la calidad y eficiencia del trabajo.
          </p>
        </div>
        <div className="w-2/5 bg-gray-100 p-8 flex flex-col items-center justify-center">
          <Image
            className="rounded-full border-4 border-gray-200 h-32 w-32"
            src="/assets/imgs/avatar.png"
            alt="User profile"
            width={100}
            height={100}
          />
          <button className="mt-4 bg-violet-600 hover:bg-violet-700 text-white text-sm py-2 px-4 rounded shadow">
            <Link href="/dashboard/chat">Enviar Solicitud</Link>
          </button>
          <span className="text-sm text-violet-500 mt-2">$6 por revisión</span>
        </div>
      </div>
    </div>
  );
};
