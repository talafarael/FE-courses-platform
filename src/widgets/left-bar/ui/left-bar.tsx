"use client";
import menu from "@/public/menu/menu.svg";
import Image from "next/image";
import { Navigation } from "@/src/entities/left-bar/ui/navigation";
import { useState } from "react";

export const LeftBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <nav
            className={`fixed top-0 left-0 w-[110px] h-screen rounded-br-2xl flex flex-col items-center p-2 z-50 ${
                isOpen ? "bg-purplelight" : "bg-transparent"
            }`}
        >
            <Image
                onClick={() => setIsOpen(!isOpen)}
                className="mt-10 cursor-pointer"
                height={48}
                width={48}
                src={menu.src}
                alt="menu"
            />
            {isOpen && (
                <div className="flex flex-col justify-between h-[20%] mt-10">
                    <Navigation />
                </div>
            )}
        </nav>
    );
};
