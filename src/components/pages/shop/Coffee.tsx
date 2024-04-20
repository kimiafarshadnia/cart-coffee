import { Fragment } from 'react';
import coffee from '../../../data/coffee.json';
import { Container, Row, Col } from "reactstrap";
import HeaderSection from '../../elements/shared/HeaderSection';
import CartProduct from '../../carts/CartProduct';

const Coffee = () => {
    return (
        <Fragment>
            <HeaderSection title='COFFEE' imgUrl='/images/coffee-banner.png' className="mb-5 d-flex flex-column justify-content-center align-items-center" />
            <Container>
                <Row sm={2} md={3} lg={4} >
                    {coffee.map((product) => (
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

export default Coffee;