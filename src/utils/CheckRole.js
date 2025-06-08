import { redirect } from 'react-router-dom';

const checkRole = () => {
  const user = JSON.parse(localStorage.getItem('furniture_user'));

  if (!user) {
    return null;
  }

  if (user.role === 'Admin') {
    return redirect('/dashboard');
  }

  return null;
};

export default checkRole;
