import Link from "next/link";

export const Chat = () => {
  return (
    <div className="flex h-full bg-gray-100">
      <aside className="w-1/4 bg-white p-4 border-r">
        <div className="flex flex-col">
          <button className="mb-4 border p-2 rounded bg-violet-200 border-violet-500">
            <Link href="https://editar-pdf.pdffiller.com/">
              Adjuntar - Documento
            </Link>
          </button>
          <div className="mb-4 font-bold">DOCUMENTOS</div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Link href="#">Documento A</Link>
            </li>
            <li className="flex items-center">
              <Link href="#">Documento B</Link>
            </li>
            <li className="flex items-center">
              <Link href="#">Documento C</Link>
            </li>
          </ul>
          <button className="mt-auto border p-2 rounded bg-violet-200 border-violet-500">
            <Link href="/dashboard/checkout" className="w-full">
              Nueva Revisión $6
            </Link>
          </button>
        </div>
      </aside>
      <section className="flex-1 flex flex-col">
        <header className="p-4 bg-gray-200 text-lg font-semibold border-b">
          Solicitud A
        </header>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex justify-end">
            <div className="bg-green-200 p-2 rounded-l-lg rounded-tr-lg max-w-xs">
              Hola, ¿cómo estás?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-blue-200 p-2 rounded-r-lg rounded-tl-lg max-w-xs">
              Bien, gracias. ¿Y tú?
            </div>
          </div>
        </div>
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Escribe un mensaje aquí"
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 :border-gray-800 "
            />

            <button type="button" className="text-violet-500">
              Enviar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
