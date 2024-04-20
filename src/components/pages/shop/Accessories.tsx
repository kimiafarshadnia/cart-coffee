import { Fragment } from 'react';
import Products from '../../../data/product.json'
import { Container, Row, Col } from "reactstrap";
import HeaderSection from '../../elements/shared/HeaderSection';
import CartProduct from '../../carts/CartProduct';

const Accessories = () => {
    return (
        <Fragment>
            <HeaderSection title='COFFEE ACCESSORIES' imgUrl='/images/coffee-banner.png' className="mb-5 d-flex flex-column justify-content-center align-items-center"/>
            <Container>
                <Row sm={2} md={3} lg={4} >
                    {Products.map((product) => (
                        <Col key={product.id} sm={6} md={4} lg={3} className='mb-3'>
                           <CartProduct id={product.id} name={product.name} type={product.type} price={product.price} imgUrl={product.imgUrl}/>

                        </Col>
                    )
                    )}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Accessories;