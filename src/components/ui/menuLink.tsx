"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MenuLink = ({ item }: { item: any }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex p-5 items-center gap-2.5 margin-custom rounded-[10px] duration-100 text-dark-500 text-12-regular md:text-14-regular lg:text-16-regular hover:bg-dashboard-active hover:shadow-lg ${
        pathname === item.path ? `bg-dashboard-active shadow-lg` : ``
      }`}
    >
      <Image
        src={item.icon}
        alt=""
        height={27}
        width={27}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {item.title}
    </Link>
  );
};

export default MenuLink;
