import { writers } from "@/common/data";
import { Profile } from "@/common/interfaces/profile";
import Link from "next/link";
import React from "react";

type Props = {
  profile: Profile[];
  textButton: string;
  path: string;
};
const ProfileCard = ({ profile, textButton, path }: Props) => {
  return (
    <>
      {profile.map((item) => (
        <div
          key={item.name}
          className=" bg-white rounded-2xl shadow-lg overflow-hidden "
        >
          <div className="p-5">
            <div className="flex justify-between items-start">
              <div className="flex space-x-2 items-center">
                <div className="text-sm bg-green-100 text-green-800 font-semibold py-1 px-3 rounded-full">
                  {item.city}
                </div>
                <span className="block text-yellow-400 text-lg">★</span>
                <span className="text-gray-600 text-sm">5 (22 opiniones)</span>
              </div>
            </div>

            {/* Profile name and status */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <span className="text-sm text-gray-400">{item.specialty}</span>
            </div>
            {/* Profile details */}
            <div className="text-center mt-4">
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price}/cop</p>
              <button
                type="button"
                className="mt-4 bg-violet-500 text-white text-sm px-4 py-2 rounded hover:bg-violet-600 focus:outline-none"
              >
                <Link href={path}>{textButton}</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileCard;
