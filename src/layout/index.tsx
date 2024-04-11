import Head from "next/head";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";

type Props = {
  title?: string;
  children?: JSX.Element[] | JSX.Element;
  description?: string;
  ogImage?: string;
};
const AdminLayout = ({
  title = "Welcome To Admin Panel",
  children = <></>,
  description,
  ogImage,
}: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleSidebarHover = () => {
    if (isDrawerOpen === false) {
      setIsDrawerOpen(true);
    }
  };

  const handleSidebarLeave = () => {
    if (isDrawerOpen === true) {
      setIsDrawerOpen(false);
    }
  };
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>Admin Panel</title>
        <meta name="description" content="" />
        <meta property="og:image" content="" />
      </Head>

      <main className="relative w-full h-screen overflow-y-scroll flex">
        <div
          className={`${
            isDrawerOpen ? "w-[22rem]" : "w-24"
          } !transition-all !ease-in-out !duration-500 m-4 sticky top-4`}
          // onMouseEnter={handleSidebarHover}
          // onMouseLeave={handleSidebarLeave}
        >
          <AdminSidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
        <div className="w-full flex flex-col gap-4 min-h-screen">
          <div className="sticky top-0">
            <AdminNavbar
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </div>
          <div className="h-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
