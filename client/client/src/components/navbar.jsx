import React, { useState } from 'react'; // Import React
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { CiShop } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
function NavBar({ changeView, isLogged, user, logout, search }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleCartClick = () => {
    changeView('cart');
  };

  const handleAddProductClick = () => {
    changeView('addProduct');
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  const handleSearch = () => {
    search(searchKeyword);
    changeView('productList', 0, 'search', searchKeyword);
    setShowSearch(false);
  };

  return (
    <div>
      <Navbar fluid rounded className="my-navbar" style={{ marginTop: '0' }}>
        <Navbar.Brand>
          <CiShop style={{ color: 'black', fontSize: '2rem' }} onClick={() => changeView('main')} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="flex items-center ml-2">
            <IoIosSearch style={{ color: 'black', fontSize: '1.5rem', cursor: 'pointer', marginRight: '0.8rem' }} onClick={handleSearchClick} />
            <div>
            </div>
            {showSearch && (
              <div className="flex items-center justify-center">
                <input type="text" placeholder="Search" className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ padding: '0.5rem' }} onChange={(e) => setSearchKeyword(e.target.value)} />
                <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none', margin: '10px' }} onClick={handleSearch}>Search</button>
                <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none', margin: '10px' }} onClick={handleSearchClose}>Close</button>
              </div>
            )}
          </div>
          {isLogged ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={user.image || ""} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              {user.role === 'seller' && (
                <>
                  <Dropdown.Item onClick={() => changeView('dashboard', 0, 'men')} >Dashboard</Dropdown.Item>
                  <Dropdown.Item onClick={handleAddProductClick}>Add Product</Dropdown.Item>
                </>
              )}
              <Dropdown.Item onClick={handleCartClick}>Cart</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={() => { logout() }}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <button onClick={() => changeView('login')}>Log In</button>
          )}
          <Navbar.Toggle />
        </div>
        <div className="justify-center">
          <Navbar.Collapse className="justify-center">
            {showSearch ? (
              <div className="flex items-center">
                {/* <input type="text" placeholder="Search" className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ padding: '0.5rem' }} />
                <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none', margin: '10px' }}>Search</button>
                <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none', margin: '10px' }} onClick={handleSearchClose}>Close</button> */}
              </div>
            ) : (
              <>
                <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }} onClick={() => changeView('productList', 0, 'men')}>
                  Men
                </Navbar.Link>
                <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }} onClick={() => changeView('productList', 0, 'women')}>
                  Women
                </Navbar.Link>
                <Navbar.Link href="#" style={{ textDecoration: 'none', margin: '0 auto', marginRight: '15px' }} onClick={() => changeView('productList', 0, 'kids')}>
                  Kids
                </Navbar.Link>
              </>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
export default NavBar;