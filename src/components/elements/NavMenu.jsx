import { NavLink } from 'react-router-dom';

function NavMenu() {
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
        <li>
          <NavLink
            to="/carts"
            className="font-semibold text-sm hover:text-orange-500 transition-colors ease-in cursor-pointer uppercase"
          >
            Carts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
