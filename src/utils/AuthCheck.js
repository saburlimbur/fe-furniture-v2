import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';

const AuthCheck = () => {
  const user = JSON.parse(localStorage.getItem('furniture_user'));
  const token = localStorage.getItem('furniture_token');

  if (!user || !token) {
    toast.error('You are not logged in');

    return redirect('/login');
  }

  //   if (user.role === 'Admin') {
  //     return redirect('/dashboard');
  //   }

  return null;
};

export default AuthCheck;
