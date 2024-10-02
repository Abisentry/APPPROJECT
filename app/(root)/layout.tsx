import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import React from "react";

interface User {
  firstName: string;
  lastName: string;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const loggedIn: User = { firstName: 'Adrian', lastName: 'JSM' };

  return (
    <div className="flex h-screen w-full font-inter">
      {/* Sidebar */}
      <Sidebar user={loggedIn} />

      {/* Main content */}
      <div className="flex flex-col w-full">
        <div className="root-layout flex items-center p-4">
          {/* Logo */}
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />

          {/* Mobile Navigation */}
          <div className="ml-auto">
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {/* Page content */}
        <div className="flex-grow p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
