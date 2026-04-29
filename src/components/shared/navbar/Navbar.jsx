"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLink = (
    <>
      <li>
        <Link
          href={"/"}
          className={`
        ${pathname === "/" ? "border-b-2 border-purple-600 font-medium" : "text-zinc-500"}
          `}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/all-photos"}
          className={`
        ${pathname === "/all-photos" ? "border-b-2 border-purple-600 font-medium" : "text-zinc-500"}
          `}
        >
          All Photos
        </Link>
      </li>

      <li>
        <Link
          href={"/pricing"}
          className={`
        ${pathname === "/pricing" ? "border-b-2 border-purple-600 font-medium" : "text-zinc-500"}
          `}
        >
          Pricing
        </Link>
      </li>

      <li>
        <Link
          href={"/profile"}
          className={`
        ${pathname === "/profile" ? "border-b-2 border-purple-600 font-medium" : "text-zinc-500"}
          `}
        >
          Profile
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="flex gap-2 items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-lg">pixgen.</h3>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{navLink}</ul>

        <div className="flex gap-4">
          <ul className="flex gap-4 items-center  text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>

            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLink}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
