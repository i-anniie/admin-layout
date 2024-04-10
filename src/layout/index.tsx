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

      <main className="relative w-full flex gap-4">
        <div
          className={`${
            isDrawerOpen ? "w-80" : "w-24"
          } !transition-all !ease-in-out !duration-300 m-2`}
          // onMouseEnter={handleSidebarHover}
          // onMouseLeave={handleSidebarLeave}
        >
          <AdminSidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
        <div className="w-full flex flex-col gap-4 min-h-screen">
          <AdminNavbar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
          <div className="h-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
