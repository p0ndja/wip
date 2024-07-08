import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="invisible xl:visible">
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-between h-20 border-b border-gray-700 px-5">
          <Image
            className="dark:invert"
            src="/samohub.svg"
            alt="SamoHub Logo"
            width={100}
            height={20}
            priority
          />
          <Link href="/profile">Login</Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className="block p-2 rounded hover:bg-gray-700">
            ข่าวประกาศ
          </Link>
          <Link href="#" className="block p-2 rounded hover:bg-gray-700">
            About
          </Link>
          <Link href="#" className="block p-2 rounded hover:bg-gray-700">
            Services
          </Link>
          <Link href="#" className="block p-2 rounded hover:bg-gray-700">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
