import { memo, FC } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useCartContext } from '../../context/CartContext';

interface Props {
    id: number;
    type?: string;
    name: string;
    imgUrl: string;
    price: number;
}

const CartProduct: FC<Props> = memo(({ id, name, imgUrl, price, type }) => {

    const { getItemQuantity, addItem, decreaseItem, removeItem } = useCartContext()
    const quantity = getItemQuantity(id);

    return (
        <Card className='h-100'>
            <div>
                <img
                    src={imgUrl} alt={name}
                />
            </div>
            <CardBody>
                <CardTitle tag="h5">
                    {name}
                </CardTitle>

                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <p>{type}</p>
                </CardSubtitle>
                <CardText>
                    <h2><span>$</span>{price}</h2>
                </CardText>
                <div className='mt-auto'>
                    {
                        quantity === 0 ? (
                            <button className='w-100 btn-secondary' onClick={()=>addItem(id)}>Add to Cart</button>
                        ) : (
                            <div className='d-flex align-items-center flex-column'>
                                <div className='d-flex align-items-center justify-content-center '>
                                    <Button className='btn-secondary' onClick={() => addItem(id)}>+</Button>
                                    <span className='fs-5 m-3'>{quantity}</span>
                                    <Button className='btn-secondary' onClick={() => decreaseItem(id)}>-</Button>
                                </div>
                                <Button className='btn-light' size='sm' onClick={() => removeItem(id)}>Remove</Button>
                            </div>
                        )
                    }
                </div>
            </CardBody>
        </Card>

    );
});

export default CartProduct;