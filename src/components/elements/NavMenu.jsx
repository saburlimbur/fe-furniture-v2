import { NavLink } from 'react-router-dom';

function NavMenu() {
  const user = JSON.parse(localStorage.getItem('furniture_user'));
  const token = localStorage.getItem('furniture_token');

  const isLoggedIn = user && token;

  return (
    <nav className="font-poppins flex-1">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink
            className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer uppercase"
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer uppercase">
            About
          </NavLink>
        </li>

        {isLoggedIn && (
          <li>
            <NavLink
              to="/carts"
              className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer uppercase"
            >
              Carts
            </NavLink>
          </li>
        )}

        <li>
          <NavLink className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer uppercase">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
