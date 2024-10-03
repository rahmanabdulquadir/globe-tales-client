/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useAppSelector } from "@/redux/hook";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountPanel } from "../client/AccountPanel";
import { LeftSidebar } from "../client/LeftSidebar";

const Header = () => {
  const location = usePathname();

  const { user, isLoading, token } = useAppSelector((state) => state.auth);

  return (
    <header className="py-3 lg:py-3 border-b sticky top-0 z-50  bg-gradient-to-r from-orange-500 via-purple-500 to-purple-700 mb-10">
      <div className="layout_container flex justify-between gap-4 items-center">
        <div className="flex items-center gap-2">
          <LeftSidebar />
          <Link href={"/"} className="text-lg font-bold ">
            <Image
              width={60}
              height={60}
              src="/images/logo.png"
              alt="logo"
              className="w-[120px]  md:flex hidden"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex gap-5 items-center ">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`text-lg font-bold text-black hover:text-white ${
                location === nav.path && "font-extrabold text-green-600"
              }`}
            >
              {nav.route}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3 items-center justify-start ">
          {user ? (
            <AccountPanel />
          ) : (
            <Link href="/login" className="text-slate-700 hover:text-green-500">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
