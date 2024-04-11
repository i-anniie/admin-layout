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
      className={`flex flex-col gap-4 h-full overflow-y-auto shadow-xl rounded-lg ${
        isDrawerOpen ? "p-4" : "p-4"
      } bg-gradient-to-b from-[#404047] via-[#333338] to-[#1e1e1f] text-white`}
    >
      {/*Sidebar Icon*/}
      <h1 className=" uppercase text-xl font-semibold !transition-all !ease-in-out !duration-500">
        {isDrawerOpen ? "Dashboard" : "D"}
      </h1>
      {/*MENU item*/}
      <div className="flex flex-col gap-1">
        {useMenuItems.map((menuItem) => (
          <>
            <div
              key={menuItem.id}
              className={`relative flex items-center cursor-pointer hover:bg-[#5e5e63] rounded-md w-full ${
                isDrawerOpen
                  ? "px-5 py-3 justify-between"
                  : "py-2 justify-center"
              } ${router.pathname === menuItem.route ? "bg-[#5e5e63]" : ""} `}
              onClick={() => toggleMenuClick(menuItem.title, menuItem.route)}
            >
              {/* {router.pathname === menuItem.route ? (
                <div className="absolute z-10 left-0 top-0 bottom-0 w-8 flex justify-end items-end bg-dark">
                  <div className="bg-red-500 w-5 h-full rounded-l-full"></div>
                </div>
              ) : null} */}
              {router.pathname === menuItem.route ? (
                <>
                  <div
                    className={`absolute z-10  top-1/2 -right-4 bg-[#5e5e63]  flex items-end ${
                      isDrawerOpen ? "w-6 h-12" : "w-6 h-10"
                    }`}
                  >
                    <div className="h-1/2 w-full bg-[#404047] rounded-tr-2xl"></div>
                  </div>
                  <div
                    className={`absolute z-10  bottom-1/2 -right-4 bg-[#5e5e63] flex items-start ${
                      isDrawerOpen ? "w-6 h-12" : "w-6 h-10"
                    }`}
                  >
                    <div className="h-1/2 w-full bg-[#404047] rounded-br-2xl"></div>
                  </div>
                </>
              ) : (
                ""
              )}
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
                    <IoIosArrowDown
                      className={`text-[#9a9a9c] ${
                        activeMenu === menuItem.title
                          ? "rotate-180 text-white"
                          : ""
                      } common-transition`}
                    />
                  </button>
                </div>
              ) : null}
            </div>
            {/*SUBMENU item*/}
            <div className="flex flex-col bg-gray-50/5 rounded-md">
              {activeMenu === menuItem.title &&
                menuItem.subMenu?.map((subMenu, index) => (
                  <div
                    className={`flex items-center cursor-pointer hover:bg-[#5e5e63] rounded-md w-full ${
                      isDrawerOpen
                        ? "px-5 py-3 justify-between"
                        : "py-2 justify-center"
                    } ${
                      router.pathname === subMenu.route
                        ? "hover:bg-[#5e5e63]"
                        : ""
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
