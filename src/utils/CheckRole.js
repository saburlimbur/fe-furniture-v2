/* eslint-disable no-console */
import { redirect } from 'react-router-dom';

const checkRole = () => {
  const user = JSON.parse(localStorage.getItem('furniture_user'));
  console.log(user);

  if (!user) {
    return redirect('/login');
  }

  if (user.role === 'Admin') {
    return redirect('/dashboard');
  }

  return null;
};

export default checkRole;
