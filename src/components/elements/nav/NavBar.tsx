import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { MenuItems } from '../../../data/menu';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../../context/CartContext';
import { uid } from '../../../utils/Utils';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {cartQuantity, openCart} = useCartContext()
    

    return (
        <Navbar color="light" light expand="md" className='mb-5'>
            <NavbarBrand to="/">Raki Coffee</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>

                    {MenuItems.map((menu) => (
                        <MenuItem menu={menu} key={uid()}/>
                    )
                    )}

                </Nav>

                <div className='d-flex align-items-center gap-3'>
                    <button>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <button onClick={openCart}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                    <div className='bg-primary rounded-circle'>
                        <span className='p-2 text-white text-sm'>{cartQuantity}</span>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;