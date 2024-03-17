import React from 'react'; // Import React
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { CiShop } from "react-icons/ci";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
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
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active style={{ textDecoration: 'none' }}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" style={{ textDecoration: 'none' }}>
          Men
        </Navbar.Link>
        <Navbar.Link href="#" style={{ textDecoration: 'none' }}>
          Women
        </Navbar.Link>
        <Navbar.Link href="#" style={{ textDecoration: 'none' }}>
          Kids
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
