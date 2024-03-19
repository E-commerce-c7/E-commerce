import React from 'react';
import { Footer } from 'flowbite-react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

function FooTer() {
  return (
    <Footer container className="dark-text" >
      <Footer.Copyright href="#"  year={2024} />
      <Footer.LinkGroup >
        <FaCcVisa style={{ margin: '10px' }} className="icon" size={40} />
        <FaCcMastercard style={{ margin: '10px' }} className="icon" size={40} />
        <FaCcAmex style={{ margin: '10px' }} className="icon" size={40} />
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooTer;