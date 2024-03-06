import { within } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import style from './Product.module.css'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {

    const [Productdata, setProductdata] = useState([])

    useEffect(() => {
        getdata()
    })

    const getdata = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        console.log(data);

        setProductdata(data);
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Products</h1>
        <div className='row'>

            {Productdata.map((v, i) => (
                <div className='col-md-4 gy-5' >
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Sample"
                        style={{
                            height: '350px'
                        }}
                        src={v.image}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {v.title.substring(0, 8)}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {v.price}
                        </CardSubtitle>
                        <CardText>
                           {v.category}
                        </CardText>
                        <CardText>
                           {v.description.substring(0, 90)}
                        </CardText>
                        <Button>
                            Add to Cart
                        </Button>
                    </CardBody>
                </Card>
                </div>
            ))}

        </div>
        </div>
    );
}

export default Product;