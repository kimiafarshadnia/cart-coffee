import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useCartContext } from '../../context/CartContext';
import coffees from '../../data/coffee.json'
import products from '../../data/product.json'
import glasses from '../../data/glasses.json'
type CartProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartProps) => {

    const { addItem, decreaseItem, removeItem } = useCartContext()

    const product = products.find((item) => item.id === id) || coffees.find((item) => item.id === id) || glasses.find((item) => item.id === id)

    if (product == null) return null

    console.log(product)

    return (
        <Card className='h-100'>
            <div>
                <img
                    src={product.imgUrl} alt={product.name}
                />
            </div>
            <CardBody>
                <CardTitle tag="h5">
                    {product.name}
                </CardTitle>

                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <p>{product.type}</p>
                </CardSubtitle>
                <CardText>
                    <span>$</span>{product.price}
                </CardText>
                <div className='mt-auto'>
                    <div className='d-flex align-items-center flex-column'>
                        <div className='d-flex align-items-center justify-content-center '>
                            <Button className='btn-secondary' onClick={() => addItem(product.id)}>+</Button>
                            <span className='fs-5 m-3'>{quantity}</span>
                            <Button className='btn-secondary' onClick={() => decreaseItem(product.id)}>-</Button>
                        </div>
                        <Button className='btn-light' size='sm' onClick={() => removeItem(product.id)}>Remove</Button>
                    </div>
                </div>
            </CardBody>
        </Card>

    );
};

export default CartItem;