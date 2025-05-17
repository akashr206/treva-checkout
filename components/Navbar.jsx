"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className="flex fixed top-0 left-0 w-full h-16 justify-center items-center bg-white border-b bg-opacity-60 backdrop-blur-md px-16">
            <div className="max-w-7xl flex items-center justify-between w-full">
                <Link href={"/"}>
                    <Image
                        width={130}
                        height={64}
                        src="/logo.png"
                        alt="logo"
                        className="p-5"
                        priority={true}
                    ></Image>
                </Link>
                <div>
                    {pathname.includes("checkout") && (
                        <Link href="#" className="text-destructive ">
                            <span className="border-b-1 border-destructive/80 pb-0.5">
                                Cancel Booking
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
