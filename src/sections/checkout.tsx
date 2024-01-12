import Link from "next/link";
import Image from "next/image";

export const CheckoutPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center p-10">
        <Image
          src="/assets/imgs/checkout.png"
          alt="Checkout illustration"
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-10 space-y-6">
        <h1 className="text-3xl font-bold">Revisión de documento</h1>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum
          explicabo sint maxime.
        </p>
        <div className="flex items-center space-x-2">
          <label className="text-lg" htmlFor="price">
            Precio:
          </label>
          <input
            className="w-20 h-10 px-2 border rounded-md text-lg"
            id="price"
          />
        </div>
        <Link
          className="inline-flex items-center justify-center h-12 px-6 text-lg font-medium text-white bg-violet-600 rounded-md shadow hover:bg-violet-700"
          href="#"
        >
          Pagar
        </Link>
      </div>
    </div>
  );
};
