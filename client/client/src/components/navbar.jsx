import React from 'react'; // Import React
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { CiShop } from "react-icons/ci";

export default function NavBar({ changeView, isLogged, user,logout}) {
  const handleCartClick = () => {
    changeView('cart');
  };

  const handleAddProductClick = () => {
    changeView('addProduct');
  };

  return (
    <div>
      <Navbar fluid rounded className="my-navbar" style={{ marginTop: '0' }}>
        <Navbar.Brand>
          <CiShop style={{ color: 'black', fontSize: '2rem' }} onClick={() => changeView('main')} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {isLogged ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img="" rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              {user.role === 'seller' && <Dropdown.Item onClick={handleAddProductClick}>Add Product</Dropdown.Item>}
              <Dropdown.Item onClick={handleCartClick}>Cart</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={()=>{logout()}}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <button onClick={() => changeView('login')}>Log In</button>
          )}
          <Navbar.Toggle />
        </div>
        <div className="justify-center">
          <Navbar.Collapse className="justify-center">
            {/* <Navbar.Link href="#" active style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }}>
              Homedsqdqsdqsdqs
            </Navbar.Link> */}
            <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }}>
              Men
            </Navbar.Link>
            <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }}>
              Women
            </Navbar.Link>
            <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }}>
              Kids
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
