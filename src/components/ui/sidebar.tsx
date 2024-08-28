import Image from "next/image";
import React from "react";

import { menuItems } from "@/lib/constants/sidebarListElements";
import MenuLink from "./menuLink";

const DashboardSidebar = async () => {
  // const { user } = await getUser();
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src="/assets/icons/userBlank.svg"
          className="rounded-full object-cover"
          height={50}
          width={50}
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-16-semibold lg:text-18-semibold text-dark-300">
            Jonas
          </span>
          <span className="text-12-regular lg:text-14-regular text-dark-500">
            Administrador
          </span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((categorie) => (
          <li key={categorie.title}>
            <span className="text-14-semibold md:text-16-semibold lg:text-18-semibold text-dark-400">
              {categorie.title}
            </span>
            {categorie.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
