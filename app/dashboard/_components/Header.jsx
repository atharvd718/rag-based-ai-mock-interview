"use client";

import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { BookOpenText, Home, LayoutDashboard, Rocket, UserRound } from "lucide-react";
import { clerkAppearance } from "@/utils/clerkAppearance";

function Header() {
  const path = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      active: path === "/dashboard",
    },
    {
      name: "Questions",
      icon: BookOpenText,
      path: "/dashboard/questions",
      active: path === "/dashboard/questions",
    },
    {
      name: "Profile",
      icon: UserRound,
      path: "/dashboard/profile",
      active: path === "/dashboard/profile",
    },
    {
      name: "AI Lab",
      icon: Rocket,
      path: "/dashboard/upgrade",
      active: path === "/dashboard/upgrade",
    },
    {
      name: "Home",
      icon: Home,
      path: "/",
      active: path === "/",
    },
  ];

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-72 border-r border-[#C4B49A] bg-[#EDE8DC] p-5 shadow-md md:flex md:flex-col">
        <Link href="/" className="group flex items-center gap-3 text-left">
          <Image
            src="/logo.svg"
            width={46}
            height={46}
            alt="AI Mock Interview"
            className="transition-transform group-hover:scale-105"
          />
          <div>
            <p className="text-sm font-bold text-[#2C1810] tracking-tight">MockMate AI</p>
            <p className="text-xs text-[#6B5744]">Interview command center</p>
          </div>
        </Link>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-all ${
                item.active
                  ? "bg-[#8B6F47] text-[#FDFAF5] shadow-md font-medium"
                  : "text-[#6B5744] hover:bg-[#D4C5A9] hover:text-[#2C1810] font-medium"
              }`}
            >
              <item.icon className={item.active ? "text-[#FDFAF5]" : "text-[#6B5744]"} size={18} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-[#C4B49A] bg-[#F5F0E8] p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6F47]">Next step</p>
          <p className="mt-1 text-sm leading-relaxed text-[#6B5744]">Keep your profile updated for better suggested interviews.</p>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-[#C4B49A] bg-[#F5F0E8] p-3">
          <span className="text-sm font-medium text-[#2C1810]">Account</span>
          <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#C4B49A] bg-[#F5F0E8] backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" width={38} height={38} alt="AI Mock Interview" />
            <span className="text-sm font-bold tracking-tight text-[#2C1810]">MockMate AI</span>
          </Link>
          <UserButton afterSignOutUrl="/" appearance={clerkAppearance} />
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                item.active ? "bg-[#8B6F47] text-[#FDFAF5] font-semibold" : "bg-[#F5F0E8] text-[#6B5744] hover:bg-[#D4C5A9] hover:text-[#2C1810]"
              }`}
            >
              <item.icon size={14} />
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Header;
