import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from './Nav';
import { useCart } from 'react-use-cart';

function HomePage() {
  const {totalItems} = useCart();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://dummyjson.com/products';
        if (searchTerm) {
          url += `/search?q=${searchTerm}`;
        }
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred while fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      if (minPrice && maxPrice) {
        return product.price >= minPrice && product.price <= maxPrice;
      }
      if (minPrice) {
        return product.price >= minPrice;
      }
      if (maxPrice) {
        return product.price <= maxPrice;
      }
      return true;
    });
    setProducts(filteredProducts);
  };

  return (
    <>
      <Nav totalItems={totalItems} />
      <Container>
        <div style={{ marginBottom: '20px' }}>
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products..." />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="minPrice">Min Price:</label>
          <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          <Button onClick={handleFilter}>Apply Filter</Button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <Card key={product.id} style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Description: {product.description}</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
                <Card.Text>Brand: {product.brand}</Card.Text>
                <Button variant="primary" onClick={() => addItem(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default HomePage;