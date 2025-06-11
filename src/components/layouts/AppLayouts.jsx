import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';

function AppLayouts() {
  const location = useLocation();

  const hideNavbarPaths = ['/login', '/register', '/dashboard'];
  const hideFooterPaths = ['/login', '/register'];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen">
      {!shouldHideNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideFooter && (
        <div className="pt-8">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AppLayouts;
