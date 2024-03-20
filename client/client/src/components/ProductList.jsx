import React, { useState } from 'react';
import OneProduct from './OnePrduct.jsx';

const ProductList = ({ products, changeView }) => {
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState('');

  const handleSizeFilterChange = (size) => {
    if (sizeFilter.includes(size)) {
      setSizeFilter(sizeFilter.filter((s) => s !== size));
    } else {
      setSizeFilter([...sizeFilter, size]);
    }
  };

  const handleColorFilterChange = (color) => {
    if (colorFilter.includes(color)) {
      setColorFilter(colorFilter.filter((c) => c !== color));
    } else {
      setColorFilter([...colorFilter, color]);
    }
  };

  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand);
  };

  const filteredProducts = products.filter((product) => {
    if (sizeFilter.length > 0 && !sizeFilter.includes(product.size)) {
      return false;
    }
    if (colorFilter.length > 0 && !colorFilter.includes(product.color)) {
      return false;
    }
    if (brandFilter && product.brand !== brandFilter) {
      return false;
    }
    return true;
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0', background: '#685F58', color: 'white', padding: '10px', marginLeft: '20px', marginRight: '20px' }}>KIDS</h1>
      <div className="product-list" style={{ display: 'flex', margin: '0 auto', gap: '20px', maxWidth: '1200px', padding: '0 20px' }}>
        <div style={{ flex: '20%', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>SHOP BY:</p>
            <div>
              <p style={{ fontWeight: 'bold' }}>Size:</p>
              <div>
                {['X', 'XL', 'S', 'L', 'M'].map((size) => (
                  <div key={size}>
                    <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                      <input
                        type="checkbox"
                        value={size}
                        checked={sizeFilter.includes(size)}
                        onChange={() => handleSizeFilterChange(size)}
                        style={{ marginRight: '5px' }}
                      />
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>Color:</p>
              <div>
                {['White', 'Black', 'Pink', 'Red', 'Purple'].map((color) => (
                  <div key={color}>
                    <label style={{ display: 'flex', alignItems: 'center', margin: '5px 0', marginLeft: '10px' }}>
                      <input
                        type="checkbox"
                        value={color}
                        checked={colorFilter.includes(color)}
                        onChange={() => handleColorFilterChange(color)}
                        style={{ marginRight: '5px' }}
                      />
                      {color}
                    </label>
                  </div>
                ))}
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
                    onChange={() => handleBrandFilterChange('Converse')}
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
                    onChange={() => handleBrandFilterChange('Adidas')}
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
                photo={product.image}
                name={product.name}
                price={product.price}
                changeView={changeView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;