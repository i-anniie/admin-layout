import React from "react";
import { VscRunAll } from "react-icons/vsc";

const AdminNavbar = ({ isDrawerOpen, setIsDrawerOpen }: any) => {
  return (
    <section
      className="mt-4 mr-4 py-6 px-4 bg-gray-50/50 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
      style={{
        backdropFilter: "saturate(200%) blur(1.875rem)",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
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
