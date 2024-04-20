import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { useCartContext } from '../../../context/CartContext';
import CartItem from './../../carts/CartItem';
import coffees from '../../../data/coffee.json';
import glasses from '../../../data/coffee.json';
import products from '../../../data/coffee.json';

type Props = {
    isOpenCart: boolean
}

const SideBarCart = ({ isOpenCart }: Props) => {

    const { closeCart, cartItems } = useCartContext()

    return (
        <Offcanvas isOpen={isOpenCart} onClosed={closeCart} fade scrollable direction='end'>
            <OffcanvasHeader toggle={closeCart}>
                Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
                <div className='d-flex flex-column gap-4 align-items-center'>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>

                <div>
                    total price: {' '}
                    {cartItems.reduce((total, currentItem) => {
                        const product = products.find((item) => item.id === currentItem.id) || coffees.find((item) => item.id === currentItem.id) || glasses.find((item) => item.id === currentItem.id)

                        return total + (product?.price || 0) * currentItem.quantity
                    }, 0)}
                </div>
            </OffcanvasBody>

        </Offcanvas>

    );
};

export default SideBarCart;