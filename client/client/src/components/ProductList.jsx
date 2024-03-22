import React, { useState,useEffect} from 'react';
import OneProduct from './OnePrduct.jsx';

const ProductList = ({ products, changeView,getOne,name }) => {
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState('e');
  const [product, setProduct] = useState([]);
  const [toogle,setToogle] = useState(false)
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);


  useEffect(()=>{
    filter()
  },[sizeFilter,colorFilter,brandFilter,filteredProducts])

  const handleSizeFilterChange = (size) => {
    if (sizeFilter.includes(size)) {
      setSizeFilter(sizeFilter.filter((s) => s !== size));
    } else {
      setSizeFilter([...sizeFilter, size]);
    }
  };

  const handleColorFilterChange = (color) => {
    if (colorFilter.includes(color.toLowerCase())) {
      setColorFilter(colorFilter.filter((c) => c !== color.toLowerCase()));
    } else {
      setColorFilter([...colorFilter, color.toLowerCase()]);
    }
  };

  
  const handleBrandFilterChange = (brand) => {
    setBrandFilter(brand);
  };
  
  const filteredProducts = products ? products.filter((product) => {
    if (sizeFilter.length > 0 && !product.sizes.some(size => sizeFilter.includes(size))) {
      return false;
    }
    if (colorFilter.length > 0 && !product.color.some(color => colorFilter.includes(color.toLowerCase()))) {
      return false;
    }
    if (brandFilter && !product.brand.some(brand => brandFilter.includes(brand.toLowerCase()))) {
      return false;
    }
    return true;
  }) : [];
  const filter = ()=>{
   let data = filteredProducts.filter((product)=>{
      return product.sex===name
    })
    setBrandFilter('Adidas')
    setProduct(data)
    setBrandFilter('')
    console.log(data);

    let sizesSet = new Set();
    let colorsSet = new Set();
    let brandsSet = new Set();
  
    data.forEach(product => {
      product.sizes.forEach(size => sizesSet.add(size));
      product.color.forEach(color => colorsSet.add(color));
      product.brand.forEach(brand => brandsSet.add(brand)); 
    });
  
    setSizes(Array.from(sizesSet).sort((a, b) => parseInt(a) - parseInt(b)));
    setColors(Array.from(colorsSet));
    setBrands(Array.from(brandsSet));
  }

  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0', background: '#685F58', color: 'white', padding: '10px', marginLeft: '20px', marginRight: '20px' }}>{name}</h1>
      <div className="product-list" style={{ display: 'flex', margin: '0 auto', gap: '20px', maxWidth: '1200px', padding: '0 20px' }}>
        <div style={{ flex: '20%', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 'bold' }}>SHOP BY:</p>
            <div>
              <p style={{ fontWeight: 'bold' }}>Size:</p>
              <div>
                {sizes.map((size) => (
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
                { products && colors.map((color) => (
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
              <OneProduct
                product={product}
                changeView={changeView}
                getOne={getOne}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;