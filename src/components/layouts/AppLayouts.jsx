import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';

function AppLayouts() {
  const locaton = useLocation();

  const hideComponent = ['/login', '/register', '/dashboard'];
  const showComponent = hideComponent.includes(locaton.pathname);

  return (
    <div className="min-h-screen">
      {!showComponent && <Navbar />}
      <main>
        <Outlet />
      </main>
      <div className="pt-8">
        <Footer />
      </div>
    </div>
  );
}

export default AppLayouts;
