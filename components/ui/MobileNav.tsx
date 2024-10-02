"use client"; // Add this line at the top

import React from 'react';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ITEMS, sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname(); // Now correctly within a client component

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/public/icons/hamburger.svg' // Corrected path
            width={30}
            height={30}
            alt='menu'
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <Link href="/" className=" cursor-pointer flex items-center gap-9 px-9">
            <Image
              src="/public/icons/let.png" 
              width={34}
              height={34}
              alt="Horizon logo"
            
            />
            <h1 className="text-26 font-ibm-plex-seriffont-bold text-black-1">Abisentry</h1> 
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild >
              
                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                key={item.label}
                className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
              >
                <div className="relative w-6 h-6"> {/* Ensure size consistency */}
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={cn({ 'brightness-[3] invert-0': isActive })}
                  />
                </div>
                <p className={cn('text-16 font-semibold text-black-2 ', { '!text-white': isActive })}>
                  {item.label}
                </p>
              </Link>
              </SheetClose>
            );
          })}
             
             

                </nav>
            </SheetClose>


          </div>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
