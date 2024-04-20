import glasses from '../../../data/glasses.json'
import { Container, Row, Col } from "reactstrap";
import HeaderSection from '../../elements/shared/HeaderSection';
import { Fragment } from 'react';
import CartProduct from '../../carts/CartProduct';

const Glasses = () => {
    return (
        <Fragment>
            <HeaderSection title='COFFEE Glasses' imgUrl='/images/coffee-banner.jpeg' className="mb-5 d-flex flex-column justify-content-center align-items-center" />
            <Container>
                <Row sm={2} md={3} lg={4} >
                    {glasses.map((product) => (
                        <Col sm={6} md={4} lg={3} className='mb-3' key={product.id}>
                            <CartProduct id={product.id} name={product.name} type={product.type} price={product.price} imgUrl={product.imgUrl} />

                        </Col>
                    )
                    )}
                </Row>
            </Container>
        </Fragment>
    )
}

// https://pin.it/7tclWll

export default Glasses;