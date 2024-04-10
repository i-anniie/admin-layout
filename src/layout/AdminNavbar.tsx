import React from "react";
import { VscRunAll } from "react-icons/vsc";

const AdminNavbar = ({ isDrawerOpen, setIsDrawerOpen }: any) => {
  return (
    <section className="w-full p-4 bg-gray-300">
      <div className="flex gap-4">
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className={`${isDrawerOpen ? "rotate-180" : "rotate-0"}`}
        >
          <VscRunAll />
        </button>
        Navbar
      </div>
    </section>
  );
};

export default AdminNavbar;
