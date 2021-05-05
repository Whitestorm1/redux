import React from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four column wide" key={id}>
                <Link to={`/product/${id}`}>

                   
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>
                           {category}
                          </Card.Text>
                          <Card.Text varient="primary">${price}</Card.Text>
                        </Card.Body>
                      </Card>




                </Link>
            </div>
        );
    })
    return (
        <>
            {renderList}
        </>
    );






}
export default ProductComponent;