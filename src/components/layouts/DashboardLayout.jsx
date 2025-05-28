import React from 'react';
import { Outlet } from 'react-router-dom';

import SidebarDashboard from '../template/SidebarDashboard';
import { SidebarProvider } from '../ui/sidebar';

function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex w-full h-screen">
        <div className="min-w-[240px] max-w-[200px]">
          <SidebarDashboard />
        </div>

        <main className="w-full h-full overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
