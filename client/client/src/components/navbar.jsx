import React from 'react'; // Import React
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { CiShop } from "react-icons/ci";

export default function NavBar(props) {
  const handleCartClick = () => {
    props.changeView('cart');
  };

  const handleAddProductClick = () => {
    props.changeView('addProduct');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Navbar fluid rounded className="my-navbar">
        <Navbar.Brand>
          <CiShop style={{ color: 'black', fontSize: '2rem' }} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={handleAddProductClick}>Add Product</Dropdown.Item>
            <Dropdown.Item onClick={handleCartClick}>Cart</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <div className="justify-center">
          <Navbar.Collapse className="justify-center">
            <Navbar.Link href="#" active style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }}>
              Home
            </Navbar.Link>
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
