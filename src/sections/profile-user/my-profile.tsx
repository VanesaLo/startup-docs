"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";
import React from "react";

export const UserProfile = () => {
  const userLogin = useAppSelector((state) => state.login);

  return (
    <div className="bg-violet-300 h-screen flex flex-row justify-center items-center ">
      <div className="mr-10 flex flex-col items-center">
        <Image
          className="rounded-full border-4 border-gray-200 h-32 w-32"
          src="/assets/imgs/avatar.png"
          alt="User profile"
          width={100}
          height={100}
        />

        <button className="mt-4 bg-violet-200 text-violet-600 text-sm px-4 py-2 rounded focus:outline-none">
          Cambiar imagen
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 flex ">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className="w-full border  rounded p-2 mt-1"
                value={userLogin.email.slice(0, 6)}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Correo
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded p-2 mt-1"
                value={userLogin.email}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="w-full border rounded p-2 mt-1"
                value={userLogin.password}
              />
            </div>
          </div>
          <button className="mt-4 bg-violet-500 hover:bg-violet-800 text-white text-sm px-6 py-2 rounded focus:outline-none float-right">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
