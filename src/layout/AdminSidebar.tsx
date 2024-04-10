import useMenuItems from "@/hooks/useMenuItems";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AdminSidebar = ({ isDrawerOpen, setIsDrawerOpen }: any) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenuClick = (title: string, route?: string) => {
    if (route) return router.push(route);
    setActiveMenu(title === activeMenu ? null : title);
  };

  return (
    <section
      className={`flex flex-col gap-4 h-full shadow-xl rounded-lg ${
        isDrawerOpen ? "p-4" : "p-4"
      } bg-gradient-to-b from-[#404047] via-[#333338] to-[#1e1e1f] text-white`}
    >
      <h1 className="uppercase text-xl font-semibold !transition-all !ease-in-out !duration-500">
        {isDrawerOpen ? "Dashboard" : "D"}
      </h1>
      <div className="flex flex-col items-center gap-4">
        {useMenuItems.map((menuItem) => (
          <>
            <div
              key={menuItem.id}
              className={`flex items-center cursor-pointer hover:bg-gray-50/15 rounded-md w-full ${
                isDrawerOpen
                  ? "px-5 py-3 justify-between"
                  : "py-2 justify-center"
              } `}
              onClick={() => toggleMenuClick(menuItem.title, menuItem.route)}
            >
              <div
                className={`flex items-center ${isDrawerOpen ? "gap-2" : ""}`}
              >
                <h1
                  className={`text-gray-100 ${
                    isDrawerOpen ? "text-2xl" : "text-2xl"
                  }`}
                >
                  {menuItem.icon}
                </h1>
                <h1 className="font-medium">
                  {isDrawerOpen ? menuItem.title : null}
                </h1>
              </div>
              {isDrawerOpen && menuItem.subMenu ? (
                <div className="flex items-center justify-center">
                  <button>
                    <IoIosArrowDown />
                  </button>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-4">
              {activeMenu === menuItem.title &&
                menuItem.subMenu?.map((subMenu, index) => (
                  <div
                    className={`flex items-center cursor-pointer hover:bg-gray-50/15 rounded-md w-full !transition-all !ease-in-out !duration-300 ${
                      isDrawerOpen
                        ? "px-5 py-3 justify-between"
                        : "py-2 justify-center"
                    } `}
                  >
                    <div
                      className={`flex items-center ${
                        isDrawerOpen ? "gap-2" : ""
                      }`}
                    >
                      <h1
                        className={`text-gray-100 ${
                          isDrawerOpen ? "text-2xl" : "text-2xl"
                        }`}
                      >
                        {subMenu.icon}
                      </h1>
                      <h1 className="font-medium">
                        {isDrawerOpen ? subMenu.title : null}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default AdminSidebar;
