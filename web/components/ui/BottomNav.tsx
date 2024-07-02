// components/BottomNav.tsx
import React from "react";
import Link from "next/link";
import { Button } from "./button";
import { CircleUserRound, House, LayoutGrid } from "lucide-react";

const BottomNav: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 shadow-lg z-50"
      style={{ background: "#fafafa" }}
    >
      <ul className="flex justify-around py-4 place-items-center ">
        <li>
          <Link href="/" className="text-gray-600 hover:text-blue-500">
            <center>
              <House />
            </center>
            <center>Home</center>
          </Link>
        </li>
        <li>
          <Link href="/" className="text-gray-600 hover:text-blue-500">
            <center>
              <LayoutGrid />
            </center>
            Apps
          </Link>
        </li>
        <li>
          <Link href="/" className="text-gray-600 hover:text-blue-500">
            <center>
              <CircleUserRound />
            </center>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
