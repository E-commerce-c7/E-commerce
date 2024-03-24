  import React, { useState, useEffect } from 'react';
  import OneProduct from './OnePrduct.jsx';

  const ProductList = ({ products, changeView, getOne, gender, searched }) => {
    const [sizeFilter, setSizeFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [brandFilter, setBrandFilter] = useState('');
    const [product, setProduct] = useState([]);
    const [toogle, setToogle] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
     filter()
    }, [sizeFilter, colorFilter, brandFilter, searched, gender, products]);

    const handleSizeFilterChange = (size) => {
      if (sizeFilter.includes(size)) {
        // If the size is already in the filter, remove it
        setSizeFilter(sizeFilter.filter((s) => s !== size));
      } else {
        // If the size is not in the filter, add it
        setSizeFilter([...sizeFilter, size]);
      }
    };

    const handleColorFilterChange = (color) => {
      if (colorFilter.includes(color)) {
        // If the color is already in the filter, remove it
        setColorFilter(colorFilter.filter((c) => c !== color));
      } else {
        // If the color is not in the filter, add it
        setColorFilter([...colorFilter, color]);
      }
    };

    const handleBrandFilterChange = (brand) => {
      setBrandFilter(brand);
    };

    const filteredProducts = products
      ? products.filter((product) => {
          if (sizeFilter.length > 0 && !product.sizes.some((size) => sizeFilter.includes(size))) {
            return false;
          }
          if (colorFilter.length > 0 && !product.color.some((color) => colorFilter.includes(color.toLowerCase()))) {
            return false;
          }

          return true;
        })
      : [];

      const filter = () => {
        let filteredProducts = products;
      
        // Apply size filter
        if (sizeFilter.length > 0) {
          filteredProducts = filteredProducts.filter(product =>
            product.sizes.some(size => sizeFilter.includes(size))
          );
        }
      
        // Apply color filter
        if (colorFilter.length > 0) {
          filteredProducts = filteredProducts.filter(product =>
            product.color.some(color => colorFilter.includes(color))
          );
        }
      
        // Apply search and gender filters
        if (searched && searched !== '') {
          filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searched.toLowerCase())
          );
        } else if (gender) {
          filteredProducts = filteredProducts.filter(product =>
            product.gender.toLowerCase() === gender.toLowerCase()
          );
        }
      
        // Update the product state
        setProduct(filteredProducts);
      
        // Extract sizes and colors from filtered products
        let sizesSet = new Set();
        let colorsSet = new Set();
      
        filteredProducts.forEach(product => {
          if (product.sizes) {
            product.sizes.forEach(size => sizesSet.add(size));
          }
          if (product.color) {
            product.color.forEach(color => colorsSet.add(color));
          }
        });
      
        // Update sizes and colors state
        setSizes(Array.from(sizesSet).sort((a, b) => parseInt(a) - parseInt(b)));
        setColors(Array.from(colorsSet));
      };
      
      
    console.log(products && product.sizes);
    return (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', margin: '20px 0', background: '#685F58', color: 'white', padding: '10px', marginLeft: '20px', marginRight: '20px' }}>{gender}</h1>
        <div className="product-list" style={{ display: 'flex', margin: '0 auto', gap: '20px', maxWidth: '1200px', padding: '0 20px' }}>
          <div style={{ flex: '20%', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>SHOP BY:</p>
              <div>
                <p style={{ fontWeight: 'bold' }}>Size:</p>
                <div>
                  {product && sizes.length > 0 && sizes.map((size) => (
                   
                    <div key={size}>
                      {console.log(size)}
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
                  {
                  products &&  colors.length > 0 && colors.map((color) => (
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
              {product.map((product) => (
                <OneProduct product={product} changeView={changeView} getOne={getOne} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductList;