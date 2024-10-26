/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useAppSelector } from "@/redux/hook";
import { navLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountPanel } from "../client/AccountPanel";
import { LeftSidebar } from "../client/LeftSidebar";
import { Button } from "../ui/button";
import logo from "/public/images/Black_And_White_Globe_Y2k_Streetwear_Logo-removebg-preview.png";

const Header = () => {
  const location = usePathname();

  const { user, isLoading, token } = useAppSelector((state) => state.auth);

  return (
    <header className="border-b sticky top-0 z-50 bg-slate-950 shadow-lg shadow-slate-900  mb-10">
      <div className="layout_container flex justify-between gap-4 items-center">
        <div className="flex items-center gap-2">
          <LeftSidebar />
          <Link href={"/"} className="text-lg font-bold ">
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={100}
            ></Image>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-5 items-center ">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`text-lg font-bold  ${
                location === nav.path && "font-extrabold underline"
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
            <Link
              href="/login"
              className="text-2xl text-white hover:text-green-500"
            >
              <Button className="py-2">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
