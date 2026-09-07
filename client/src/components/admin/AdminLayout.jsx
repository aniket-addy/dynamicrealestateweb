import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* =====================================================
          MOBILE BACKDROP
      ====================================================== */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-30
            bg-slate-950/40
            backdrop-blur-[2px]
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />


      {/* =====================================================
          MAIN CONTENT AREA
      ====================================================== */}

      <div className="min-h-screen lg:ml-[260px]">

        {/* =================================================
            HEADER
        ================================================== */}

        <AdminHeader
          onMenuClick={() => setSidebarOpen(true)}
        />


        {/* =================================================
            PAGE CONTENT
        ================================================== */}

        <main className="min-h-[calc(100vh-72px)] bg-slate-100 px-4 py-5 sm:px-6 lg:px-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;