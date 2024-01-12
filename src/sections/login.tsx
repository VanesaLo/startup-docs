"use client";

import { loginUser } from "@/redux/features/login-slice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const LoginPage = () => {
  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: values.email,
        password: values.password,
      })
    );
    setValue({
      email: "",
      password: "",
    });
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <section className="w-1/2  flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-2">¡Bienvenid@s!</h2>

        <Image
          src="/assets/imgs/login.jpg"
          alt="Login illustration"
          width={500}
          height={500}
          sizes="50vw"
          priority
        />
      </section>

      {/* Right Side */}
      <section className="w-1/2 flex flex-col justify-center bg-violet-400 text-white ">
        <div className="max-w-md m-auto">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-2">
            Es un gusto verte de nuevo.
          </h2>
          <p className="mb-4">Iniciar Sesión</p>
          {/* Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 text-black  w-full border-gray-300 rounded-md shadow-sm p-2"
                placeholder="example@email.com"
                value={values.email}
                onChange={(e) => setValue({ ...values, email: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 text-black   w-full p-2 border-gray-300 rounded-md shadow-sm"
                placeholder="Contraseña"
                value={values.password}
                onChange={(e) =>
                  setValue({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-6 py-2 w-48 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-600"
                onClick={handleSubmit}
              >
                Ingresar
              </button>
              <Link
                href="#"
                className="text-sm  text-violet-900 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>
          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Signup Link */}
          <p className="mt-6 text-sm text-center ">
            ¿No tienes una cuenta? <br />
            <Link href="/register" className="text-violet-900  hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
