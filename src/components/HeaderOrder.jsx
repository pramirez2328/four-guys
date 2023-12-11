import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { selectAllOrders } from '../orderSlice';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../assets/cart.png';
import '../styles/header.css';

function HeaderOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let items = useSelector(selectAllOrders);

  return (
    <div className='header-order'>
      <Navbar expand='md' fixed='top' bg='white'>
        <NavbarToggler onClick={toggle} />
        <div className='cart-container d-flex justify-content-end align-items-center'>
          <div id='cart-icon' className='me-3'>
            <img className='w-100' src={cart} alt='cart icon' />
          </div>
          <h4 className='mt-2 me-3'>{items.length}</h4>
        </div>
        <NavbarBrand href='/four-guys/' className='mx-2'>
          <h1 className='logo'>FOUR GUYS</h1>
        </NavbarBrand>

        <Collapse className='flex-grow-0 nav-links' isOpen={isOpen} navbar>
          <Nav className='me-auto w-100' navbar>
            <NavItem>
              <NavLink href='/four-guys/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/four-guys/menu'>Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/four-guys/locations'>Locations</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderOrder;
