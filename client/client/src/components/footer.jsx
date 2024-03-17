import React from 'react';
import { Footer } from 'flowbite-react';
import { FaCcVisa,FaCcMastercard,FaCcAmex} from "react-icons/fa";

function FooTer() {
  return (
    <Footer container className="dark-text">
      <Footer.Copyright href="#"  year={2024} />
      <Footer.LinkGroup>
        <FaCcVisa size={30} style={{ marginRight: '10px' }} />
        <FaCcMastercard size={30} style={{ marginRight: '10px' }} />
        <FaCcAmex size={30} style={{ marginRight: '10px' }} />
      </Footer.LinkGroup>
    </Footer>
  );
}
export default FooTer;