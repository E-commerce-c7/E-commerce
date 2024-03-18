import React, { useState } from 'react';
import OneProduct from './OnePrduct.jsx';

const ProductList = ({ products }) => {
  const [sizeFilter, setSizeFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  const handleSizeFilterChange = (size) => {
    setSizeFilter(size);
  };

  const handleColorFilterChange = (color) => {
    setColorFilter(color);
  };

  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand);
  };

  const filteredProducts = products.filter((product) => {
    if (sizeFilter && product.size !== sizeFilter) {
      return false;
    }
    if (colorFilter && product.color !== colorFilter) {
      return false;
    }
    if (brandFilter && product.brand !== brandFilter) {
      return false;
    }
    return true;
  });

  return (
    <div >
    <h1 style={{ textAlign: 'center', margin: '20px 0', background: '#685F58', color: 'white', padding: '10px', marginLeft: '20px' ,marginRight: '20px' }}>KIDS</h1>
    <div className="product-list" style={{ display: 'flex', margin: '0 auto', gap: '20px', maxWidth: '1200px', padding: '0 20px' }}>

     
      <div style={{ flex: '20%', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <p style={{ fontWeight: 'bold' }}>SHOP BY:</p>
          <div>
            <p style={{ fontWeight: 'bold' }}>Size:</p>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="X"
                  checked={sizeFilter === 'X'}
                  onChange={(e) => handleSizeFilterChange(e.target.checked ? 'X' : '')}
                  style={{ marginRight: '5px' }}
                />
                X
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="XL"
                  checked={sizeFilter === 'XL'}
                  onChange={(e) => handleSizeFilterChange(e.target.checked ? 'XL' : '')}
                  style={{ marginRight: '5px' }}
                />
                XL
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="S"
                  checked={sizeFilter === 'S'}
                  onChange={(e) => handleSizeFilterChange(e.target.checked ? 'S' : '')}
                  style={{ marginRight: '5px' }}
                />
                S
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="L"
                  checked={sizeFilter === 'L'}
                  onChange={(e) => handleSizeFilterChange(e.target.checked ? 'L' : '')}
                  style={{ marginRight: '5px' }}
                />
                L
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="M"
                  checked={sizeFilter === 'M'}
                  onChange={(e) => handleSizeFilterChange(e.target.checked ? 'M' : '')}
                  style={{ marginRight: '5px' }}
                />
                M
              </label>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Color:</p>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="White"
                  checked={colorFilter === 'White'}
                  onChange={(e) => handleColorFilterChange(e.target.checked ? 'White' : '')}
                  style={{ marginRight: '5px' }}
                />
                White
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Black"
                  checked={colorFilter === 'Black'}
                  onChange={(e) => handleColorFilterChange(e.target.checked ? 'Black' : '')}
                  style={{ marginRight: '5px' }}
                />
                Black
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Pink"
                  checked={colorFilter === 'Pink'}
                  onChange={(e) => handleColorFilterChange(e.target.checked ? 'Pink' : '')}
                  style={{ marginRight: '5px' }}
                />
                Pink
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Red"
                  checked={colorFilter === 'Red'}
                  onChange={(e) => handleColorFilterChange(e.target.checked ? 'Red' : '')}
                  style={{ marginRight: '5px' }}
                />
                Red
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Purple"
                  checked={colorFilter === 'Purple'}
                  onChange={(e) => handleColorFilterChange(e.target.checked ? 'Purple' : '')}
                  style={{ marginRight: '5px' }}
                />
                Purple
              </label>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Brand:</p>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Converse"
                  checked={brandFilter === 'Converse'}
                  onChange={(e) => handleBrandFilterChange(e.target.checked ? 'Converse' : '')}
                  style={{ marginRight: '5px' }}
                />
                Converse
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                <input
                  type="checkbox"
                  value="Adidas"
                  checked={brandFilter === 'Adidas'}
                  onChange={(e) => handleBrandFilterChange(e.target.checked ? 'Adidas' : '')}
                  style={{ marginRight: '5px' }}
                />
                Adidas
              </label>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '80%', paddingLeft: '10px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.map((product) => (
            <OneProduct
              key={product.id}
              photo={product.photo}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductList;