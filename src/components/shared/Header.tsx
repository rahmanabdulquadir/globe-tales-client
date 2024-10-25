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

const Header = () => {
  const location = usePathname();

  const { user, isLoading, token } = useAppSelector((state) => state.auth);

  return (
    <header className=" border-b sticky top-0 z-50 bg-slate-900  mb-10">
      <div className="layout_container flex justify-between gap-4 items-center">
        <div className="flex items-center gap-2">
          <LeftSidebar />
          <Link href={"/"} className="text-lg font-bold ">
          
            <h2 className="mt-[-10px] h-full my-auto">Globe Tales</h2>
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
            <Link href="/login" className="text-2xl text-black hover:text-green-500">
              <Button className="py-2">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
