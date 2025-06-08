import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthCheck from '@/utils/AuthCheck';

function ProtectedRoute() {
  const user = AuthCheck();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
