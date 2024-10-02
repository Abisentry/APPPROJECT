'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar p-4"> {/* Added padding to the sidebar */}
      <nav className="flex flex-col gap-3"> {/* Reduced gap for smaller spacing */}
        <Link href="/" className="mb-6 cursor-pointer flex items-center gap-2">
          <Image 
            src="/public/icons/let.png"  // Ensure correct image path
            width={28}  // Smaller image
            height={28}
            alt="Horizon logo"
            className="size-[24px]" 
          />
          <h4 className="text-black font-semibold text-sm">Abisentry</h4>  {/* Smaller font size */}
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label}
              className={cn('flex items-center gap-2 p-2 rounded-md', 
                { 'bg-bank-gradient': isActive, 'hover:bg-gray-200': !isActive })}  // Reduced padding for smaller size
            >
              <div className="relative w-5 h-5">  {/* Smaller icon size */}
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("text-sm text-gray-800", { "!text-white": isActive })}>
                {item.label}
              </p>  {/* Smaller font size */}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}  

export default Sidebar;
